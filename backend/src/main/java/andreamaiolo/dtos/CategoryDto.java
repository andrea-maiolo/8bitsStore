package andreamaiolo.dtos;

import java.util.UUID;

public record CategoryDto(
        String name,
        UUID catId
) {
}
