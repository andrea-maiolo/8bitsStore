package andreamaiolo.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterPayload(
        @NotBlank(message = "name is required")
        @Size(min = 2, max = 15, message = "name must be between 2 and 15 characters")
        String name,
        @NotBlank(message = "surname is required")
        @Size(min = 2, max = 15, message = "surname must be between 2 and 15 characters")
        String surname,
        @NotBlank(message = "password is required")
        @Size(min = 2, max = 20)
        String password,
        @NotBlank(message = "email is required")
        @Email(message = "the email is not in the right format")
        String email
) {
}
