package andreamaiolo.controllers;

import andreamaiolo.dtos.LoginDto;
import andreamaiolo.dtos.LoginPayload;
import andreamaiolo.dtos.RegisterPayload;
import andreamaiolo.dtos.RegistrationDto;
import andreamaiolo.entities.User;
import andreamaiolo.exceptions.ValidationException;
import andreamaiolo.services.AuthService;
import andreamaiolo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public LoginDto logUser(@RequestBody @Validated LoginPayload payload) {
        String token = this.authService.checkCredentials(payload);
        return new LoginDto(token);
    }

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    public RegistrationDto registerUser(@RequestBody @Validated RegisterPayload payload, BindingResult validationResults) {
        if (validationResults.hasErrors()) {
            validationResults.getFieldErrors().forEach(fieldError -> System.out.println(fieldError.getDefaultMessage()));
            throw new ValidationException(validationResults.getFieldErrors()
                    .stream()
                    .map(fieldError -> fieldError.getDefaultMessage())
                    .toList()
            );
        } else {
            User newUser = this.userService.saveUser(payload);
            return new RegistrationDto("all saved jsut log in");
        }
    }
}
