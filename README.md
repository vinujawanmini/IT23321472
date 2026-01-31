# IT3040 – Assignment 1 | Test Automation

**Student ID:** IT23321472
**Module:** IT3040 – IT Project Management
**Option:** Option 1 – Singlish to Sinhala Translation Testing

---

## 📘 Project Overview

This repository contains an automated test suite developed to evaluate the **SwiftTranslator** web application ([https://www.swifttranslator.com/](https://www.swifttranslator.com/)).

The main objective of this project is to test the **functional accuracy**, **robustness**, and **UI responsiveness** of the **Singlish to Sinhala translation feature** using **Playwright Test Automation**.

---

## 🧪 Test Coverage

### ✅ Positive Functional Test Scenarios (30)

* Common daily-use sentences
* Simple and complex sentence structures
* Different tenses
* Short and medium-length inputs
* Validation of correct Sinhala output

### ❌ Negative / Robustness Test Scenarios (11)

* Mixed English and Singlish inputs
* Special characters and symbols
* URLs and numbers
* Empty and invalid inputs

### 🎨 UI Test Scenario (3)

* Real-time Sinhala output update verification

---

## 🛠️ Technologies Used

* **Playwright** – Test automation framework
* **JavaScript** – Test scripting language
* **Node.js & NPM** – Dependency management
* **VS Code** – Recommended IDE

---

## 📋 Prerequisites

Before running the tests, make sure the following are installed:

* Node.js (v14 or higher)
* NPM (Node Package Manager)
* Visual Studio Code (Recommended)
* Stable internet connection

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/IT23321472.git
cd IT23321472
```

### 2️⃣ Install Dependencies

Run the following commands inside the project directory:

```bash
npm init playwright@latest
```

---

## 🚀 How to Run Tests

### ▶️ Run ALL Tests

Runs the complete test suite (Positive, Negative, and UI tests):

```bash
npx playwright test
```

### ▶️ Run Only Positive Functional Tests

```bash
npx playwright test tests/assignmentPos_FUN.spec.js
```

### ▶️ Run Only Negative / Robustness Tests

```bash
npx playwright test tests/assignmentNeg.spec.js
```

### ▶️ Run Only UI Test Scenario

```bash
npx playwright test tests/assignmentPos_UI.spec.js
```

---

## 📊 Test Reports

After test execution, Playwright generates an HTML report automatically.

To view the report:

```bash
npx playwright show-report
```

---

## 📌 Notes

* Ensure the SwiftTranslator website is accessible during test execution.
* Tests are executed using the Playwright Test Runner.
* All test cases are written following automation best practices.

---

## 👨‍🎓 Author

**Student ID:** IT23321472
**Module:** IT3040 – ITPM
**Institution:** SLIIT

---

✅ *This project is developed solely for academic purposes.*
