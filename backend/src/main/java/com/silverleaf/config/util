package com.silverleaf.demo.util;package com.silverleaf.demo.util;



import io.jsonwebtoken.Jwts;import io.jsonwebtoken.Jwts;

import io.jsonwebtoken.SignatureAlgorithm;import io.jsonwebtoken.SignatureAlgorithm;

import org.springframework.stereotype.Component;import io.jsonwebtoken.security.Keys;

import java.util.Date;import org.springframework.stereotype.Component;



@Componentimport javax.crypto.SecretKey;

public class JwtUtil {import java.util.Date;

    private final String SECRET_KEY = "silverleaf_secret_key_2024";

    private final long EXPIRATION = 86400000; // 24 hours@Component

public class JwtUtil {

    public String generateToken(String email) {    private final SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

        return Jwts.builder()    private final long EXPIRATION_TIME = 1000 * 60 * 60 * 24; // 24 hours

                .setSubject(email)

                .setIssuedAt(new Date())    public String generateToken(String email) {

                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION))        return Jwts.builder()

                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)                .setSubject(email)

                .compact();                .setIssuedAt(new Date())

    }                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))

                .signWith(key)

    public String extractEmail(String token) {                .compact();

        return Jwts.parser()    }

                .setSigningKey(SECRET_KEY)

                .parseClaimsJws(token)    public String extractEmail(String token) {

                .getBody()        return Jwts.parserBuilder()

                .getSubject();                .setSigningKey(key)

    }                .build()

                .parseClaimsJws(token)

    public boolean validateToken(String token) {                .getBody()

        try {                .getSubject();

            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);    }

            return true;

        } catch (Exception e) {    public boolean validateToken(String token) {

            return false;        try {

        }            Jwts.parserBuilder()

    }                    .setSigningKey(key)

}                    .build()

                    .parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
