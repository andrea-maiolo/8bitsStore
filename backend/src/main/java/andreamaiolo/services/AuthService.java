package andreamaiolo.services;

import andreamaiolo.dtos.LoginPayload;
import andreamaiolo.entities.User;
import andreamaiolo.exceptions.UnauthorizedException;
import andreamaiolo.security.JWTTool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    // here you manager the login you need bcrypc the userservice.
    //check for user user bcryp to check password, if all good call jwttol and createtoeken
    @Autowired
    private JWTTool jwtTool;

    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String checkCredentials(LoginPayload paylaod) {
        User found = this.userService.findUserByEmail(paylaod.email());

        if (passwordEncoder.matches(paylaod.password(), found.getPassword())) {
            String token = jwtTool.createToken(found);
            return token;
        } else {
            throw new UnauthorizedException("credentials are invalid");
        }
    }

}
