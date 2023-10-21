# TypeScript SOLID Principles

## Intro

If you are a software engineer, probably you already listened about ‘SOLID’ and its principles, “**SOLID” are one of the most important principles** when you are programming on an object-oriented project.

In this article, I’ll explain you SOLID OCP principle easily.

Let’s look at each principle one by one. Following the SOLID acronym, they are:

- The **S**ingle Responsibility Principle
- The **O**pen-Closed Principle
- The **L**iskov Substitution Principle
- The **I**nterface Segregation Principle
- The **D**ependency Inversion Principle

## In this repo you will find a file per principles.

    Each file solve a problem using a principle.

### Table of files

| **File Name**      | **Principle**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| :----------------- | :------------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [srp.ts](./srp.ts) | Single Responsibility Principle (SRP) | This principle states that every method/class should handle a single responsibility. This is important because it results in better readability of code and separation of concerns.                                                                                                                                                                                                                                                                                                                                                       |
| [ocp.ts](./ocp.ts) | Open-Closed Principle (OCP)           | The core meaning of the Open/Closed principle is made clear by the statement: *open to extension, closed for modification. *The idea is that a class, once implemented, should be closed for any further modification. If any more functionality is needed, it can be added later using extension features such as inheritance. This is primarily done so as to not break existing code as well as unit tests. It also results in a modular code.                                                                                         |
| [lsp.ts](./lsp.ts) | Liskov Substitution Principle (LSP)   | Imagine you have a class S which has subtypes S1, S2, and S3. In object-oriented terms, assume a class Animal that is extended by subclasses like Dog, Cat, etc. The Liksov Substitution Principle states that any object of type S (Animal in our case) can be substituted with any of its subclasses (S1, S2, S3). Since this type of substitution was first introduced by Barbara Liskov, it’s known as the Liskov Substitution Principle. Now if our Animal class has a walk method, it should work fine on instances of Dog and Cat. |
| [isp.ts](./isp.ts) | Interface Segregation Principle (ISP) | The Interface Segregation Principle — or ISP for short — states that instead of a generalized interface for a class, it is better to use separate segregated interfaces with smaller functionalities. This is similar to ideas we’ve discussed so far around maintaining loose coupling, but for interfaces.                                                                                                                                                                                                                              |
| [dip.ts](./dip.ts) | Dependency Inversion Principle (DIP)  | The Dependency Inversion Principle states that high-level modules should not depend on low-level modules, but rather on abstractions. Secondly, abstraction should not depend on details. When you think about it, this sounds like common sense. Practically, though, we might miss these details when we work on our software architecture.                                                                                                                                                                                             |

### Conclusion

    In this part, we went through practical scenarios of using all the design principles of SOLID using typescript language. The examples were simplified for learning purposes but dealt with various challenges faced in real software design. The upcoming parts will deal with more advanced design patterns such as creational and structural patterns.
