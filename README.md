# PRODIGY_ST_03 – SauceDemo Login Automation

## 📌 Task Description

This project automates the login functionality of the [SauceDemo website](https://www.saucedemo.com/) using Cypress in JavaScript. It verifies multiple login scenarios with valid and invalid inputs.

---

## ✅ Test Scenarios Covered

### Positive Test Cases

TC01: Login with valid standard_user  
- Steps:  
  1. Go to https://www.saucedemo.com/  
  2. Enter username: standard_user  
  3. Enter password: secret_sauce  
  4. Click Login  
- Expected Result: redirected to inventory page

---

TC02: Login with valid problem_user  
- Steps: same as TC01 with problem_user  
- Expected Result: redirected to inventory page

---

TC03: Login with valid performance_glitch_user  
- Steps: same as TC01 with performance_glitch_user  
- Expected Result: redirected to inventory page (may load slowly)

---

TC04: Login with valid visual_user  
- Steps: same as TC01 with visual_user  
- Expected Result: redirected to inventory page

---

TC05: Login with error_user  
- Steps: same as TC01 with error_user  
- Expected Result: redirected to inventory page (may simulate error handling)

---

TC06: Login with locked_out_user  
- Steps: same as TC01 with locked_out_user  
- Expected Result: shows locked-out user error

---

### Negative Test Cases

TC07: Invalid username with valid password  
- Steps: enter invalid_user / secret_sauce  
- Expected Result: error message displayed

---

TC08: Valid username with invalid password  
- Steps: standard_user / wrongpassword  
- Expected Result: error message displayed

---

TC09: Empty username and password  
- Steps: leave both blank, click login  
- Expected Result: error message displayed

---

TC10: Empty username with valid password  
- Steps: leave username blank, enter secret_sauce  
- Expected Result: error message displayed

---

TC11: Valid username with empty password  
- Steps: standard_user with empty password  
- Expected Result: error message displayed

---

## 📁 Files Included

| File Name                      | Description                                                      |
|--------------------------------|------------------------------------------------------------------|
| `login.cy.js`                  | Cypress test script implementing the automated test cases        |
| `README.md`                    | All task details, manual test cases, and Cypress usage info      |

---

## ✅ How to Run

1. Clone or download this repository  
2. Install dependencies with:  

```bash
npm install cypress --save-dev
npx cypress open
npx cypress run --spec "cypress/e2e/login.cy.js"
npx cypress cache clear
npm install cypress --save-dev
npx cypress verify

----








