package learn.destinationLoading.security;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@EnableWebSecurity
public class SecurityConfig {

    private final JwtConverter jwtConverter;

    public SecurityConfig(JwtConverter jwtConverter) {
        this.jwtConverter = jwtConverter;
    }

    // need a way to configure api paths to include a dynamic user/company id, and only allow users with the matching id to make requests
    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();

        http.cors();

        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/api/authenticate").permitAll()
                .antMatchers(HttpMethod.GET, "/api/reservation", "/api/reservation/*").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/reservation/useraccount/")
    }

}
