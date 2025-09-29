package andreamaiolo.services;

import andreamaiolo.dtos.RegisterPayload;
import andreamaiolo.entities.User;
import andreamaiolo.enums.Role;
import andreamaiolo.exceptions.EmailAlreadyInUse;
import andreamaiolo.exceptions.NotFoundException;
import andreamaiolo.repositories.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User saveUser(RegisterPayload payload) {
        User newUser = new User();
        newUser.setName(payload.name());
        newUser.setSurname(payload.surname());
        newUser.setRole(Role.USER);
        newUser.setPassword(passwordEncoder.encode(payload.password()));

        if (userRepo.findByEmail(payload.email()).isPresent()) {
            throw new EmailAlreadyInUse("this is email is already in use");
        } else {
            newUser.setEmail(payload.email());
        }

        this.userRepo.save(newUser);
        return newUser;
    }

    public User findUserByEmail(String email) {
        return this.userRepo.findByEmail(email).orElseThrow(() -> new NotFoundException("user not found"));
    }

    public User findById(UUID userId) {
        return this.userRepo.findById(userId).orElseThrow(() -> new NotFoundException("user not found"));
    }
}
