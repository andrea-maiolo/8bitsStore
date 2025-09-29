package andreamaiolo.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LoginPayload(
        @NotBlank(message = "email is required")
        @Email(message = "the email is not in the right format")
        String email,
        @NotBlank(message = "password is required")
        @Size(min = 2, max = 20)
        String password
) {
}
