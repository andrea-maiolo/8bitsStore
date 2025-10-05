package andreamaiolo.dtos;

public record ProductPayload(
        String name,
        String description,
        double price,
        int stock
) {
}
