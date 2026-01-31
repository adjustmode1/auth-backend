## Ideas project
1. Basic Authentication:
   - [ ] Username / Email + Password
   - [ ] Password hashing (bcrypt, salt)
   - [ ] Account active / inactive
   - [ ] Login / Logout flow
   * Schemas: users
   

2. Token-based Authentication:
   - [ ] JWT (JSON Web Token)
   - [ ] Access Token vs Refresh Token
   - [ ] Token expiration strategy
   - [ ] Token rotation
   - [ ] Token revocation
    * Schemas: users, refresh_tokens


3. Session-based Authentication:
   - [ ] Server-side session
   - [ ] Session store (Redis, DB)
   - [ ] Cookie-based auth
   - [ ] Compare Session vs JWT
    * Schemas: users, sessions


4. JWT Authentication (Production-level)
   - [ ] Stateless authentication
   - [ ] JWT payload design
   - [ ] Signing algorithm (HS256, RS256)
   - [ ] Token validation
   - [ ] Blacklist / deny-list token strategy
   - [ ] Refresh token storage (DB / Redis)
   - [ ] Refresh token hashing
   - [ ] One-time use refresh token
   - [ ] Multi-device login handling
   - [ ] Logout & revoke refresh token
    * Schemas: users, refresh_tokens


6. Cookie-based Authentication
   - [ ] HTTPOnly cookies
   - [ ] Secure / SameSite flags
   - [ ] Refresh token in cookie
   - [ ] CSRF considerations
    * Schemas: users, refresh_tokens


7. Authorization (AuthZ)
   - [ ] Role-Based Access Control (RBAC)
   - [ ] Permission-based authorization
   - [ ] Resource ownership validation
   - [ ] Policy / Guard-based authorization
    * Schemas: roles, permission, role_permissions, user_roles


8. OAuth 2.0 & Social Login
   - [ ] OAuth 2.0 flow (Authorization Code)
   - [ ] Google / GitHub / Facebook login
   - [ ] Token exchange
   - [ ] Linking social account với local account
    * Schemas: users, oauth_accounts


9. API Key Authentication
   - [ ] API key generation
   - [ ] API key rotation
   - [ ] Scope-based access
   - [ ] Use case cho internal / public API
    * Schemas: users, api_keys


10. Multi-factor Authentication (MFA)
    - [ ] OTP (TOTP)
    - [ ] Email-based verification
    - [ ] SMS-based OTP (known rick)
    - [ ] Backup codes
    * Schemas: users, mfa_secrets


11. SSO (Single Sign-On)
    - [ ] Centralized auth service
    - [ ] JWT / OAuth-based SSO
    - [ ] SAML (Only known concept)
    - [ ] Enterprise use cases
    * Schemas: users, oauth_accounts


12. Authentication trong Microservices
    - [ ] Central Auth Service
    - [ ] Token validation between services
    - [ ] Token introspection
    - [ ] Service-to-service authentication
    * Schemas: users, api_keys, refresh_tokens


## Schemas used 
```sql 
users (
  id UUID PK
  email VARCHAR UNIQUE
  password_hash VARCHAR
  is_active BOOLEAN
  email_verified BOOLEAN
  created_at TIMESTAMP
  updated_at TIMESTAMP
)

roles (
  id UUID PK
  name VARCHAR UNIQUE
)
      
permissions (
  id UUID PK
  code VARCHAR UNIQUE -- user:create, task:read
)

user_roles (
  user_id UUID FK
  role_id UUID FK
)

refresh_tokens (
  id UUID PK
  user_id UUID FK
  token_hash VARCHAR
  expires_at TIMESTAMP
  is_revoked BOOLEAN
  device_id VARCHAR
)

sessions (
  id VARCHAR PK
  user_id UUID FK
  expires_at TIMESTAMP
  data JSONB
)

oauth_accounts (
  id UUID PK
  user_id UUID FK
  provider VARCHAR -- google, github
  provider_user_id VARCHAR
)

api_keys (
  id UUID PK
  key_hash VARCHAR
  owner_type VARCHAR -- user / service
  owner_id UUID
  scopes TEXT[]
  is_active BOOLEAN
)

mfa_secrets (
  user_id UUID PK
  secret VARCHAR
  is_enabled BOOLEAN
)
```

## Project setup

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```