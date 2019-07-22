package resource2.resource2.controller;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@EnableWebSecurity
public class IdentityController {

    @GetMapping("/Identity")
    public String greeting() {

        return "Welcome to the jungle";
    }

}