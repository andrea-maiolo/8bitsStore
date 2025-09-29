package andreamaiolo.security;

import andreamaiolo.entities.User;
import andreamaiolo.exceptions.UnauthorizedException;
import andreamaiolo.services.UserService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.UUID;

@Component
public class SecurityFilter extends OncePerRequestFilter {

    @Autowired
    private JWTTool jwtTool;

    @Autowired
    private UserService userService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            throw new UnauthorizedException("enter token in right format");
        }

        String token = authHeader.replace("Bearer ", "");
        jwtTool.verifyToken(token);

        String userId = jwtTool.extractUserIdFromToken(token);
        User currentUser = userService.findById(UUID.fromString(userId));


//da aggiungere le authorities
//        Authentication authentication = new UsernamePasswordAuthenticationToken(currentUser, null, currentUser.getAuthorities());
//
//        SecurityContextHolder.getContext().setAuthentication(authentication);

        filterChain.doFilter(request, response);
    }

    //make auth available to anyone
    @Override
    protected boolean shouldNotFilter(HttpServletRequest httpServletRequest) {
        return new AntPathMatcher().match("/auth/**", httpServletRequest.getServletPath());
    }

}

