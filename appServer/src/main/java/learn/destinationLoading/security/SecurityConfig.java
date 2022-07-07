package learn.destinationLoading.security;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final JwtConverter jwtConverter;

    public SecurityConfig(JwtConverter jwtConverter) {
        this.jwtConverter = jwtConverter;
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http.csrf().disable();

        http.cors();

        http.authorizeRequests()
                .antMatchers(HttpMethod.POST, "/api/authenticate").permitAll()
                .antMatchers(HttpMethod.POST, "/api/appuser").permitAll()
                .antMatchers(HttpMethod.POST, "/api/useraccount").hasAnyRole("USER")
                .antMatchers(HttpMethod.GET, "/api/useraccount/user").hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.GET, "/api/useraccount", "/api/useraccount/*").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/useraccount/*").hasAnyRole("USER", "ADMIN")
                .antMatchers(HttpMethod.DELETE, "/api/useraccount/*").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.POST, "/api/company").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/company", "/api/company/*").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/company/*").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.PUT, "/api/company/*").hasAnyRole("REP", "ADMIN")
                .antMatchers(HttpMethod.GET, "/api/reservation/user").hasAnyRole("USER")
                .antMatchers(HttpMethod.POST, "/api/reservation").hasAnyRole("USER")
                .antMatchers(HttpMethod.GET, "/api/reservation").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/reservation/useraccount/*").hasAnyRole("ADMIN")
                .antMatchers(HttpMethod.GET, "/api/reservation/company/*").hasAnyRole("REP", "ADMIN")
                .antMatchers(HttpMethod.GET, "/api/reservation/*").permitAll()
                .antMatchers(HttpMethod.PUT, "/api/reservation/*").permitAll()
                .antMatchers(HttpMethod.DELETE, "/api/reservation/*").hasAnyRole("USER")
                .antMatchers("/**").denyAll()
                .and()
                .addFilter(new JwtRequestFilter(authenticationManager(), jwtConverter))
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
    @Override
    @Bean
    protected AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }





    }


