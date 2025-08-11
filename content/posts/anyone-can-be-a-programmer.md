---
title: "Anyone Can Be a Programmer"
date: 2025-08-09T10:00:00Z
draft: false
category: ["ai"]
tags: ["ai", "blog", "natural langauge programming"]
---

<div style="position:fixed;right:0;width:350px;margin:0 0 20px 20px;padding:15px;background:0 0;border-left:4px solid #007acc;font-size:.9em">
  <strong>🎧 Also Available:</strong><br>
  Listen as a podcast<br>
  <audio controls>
    <source src="/podcasts/Anyone_Can_Be_a_Programmer_Podcast.m4a" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio> 
  <br><br>Watch key points<br>
  <video width="100%" controls>
    <source src="/videos/Anyone_Can_Be_a_Programmer_Video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

Software programming has fundamentally changed with the rise of AI-assisted programming. Today, anyone can turn their ideas into working software without writing a single line of traditional code. AI tools like Claude and ChatGPT have changed who can be a programmer and how programming works.

This shift has created a new approach of software developemnt, where the focus isn't on understanding syntax or debugging code, it's purely on describing what we want the software to do. This approach is popular as "vibe coding"; programming by feel rather than technical understanding.

I prefer to call this "Natural Language Programming." over "Vibe Coding" as it better captures the historical significance of what's happening. Just as we evolved from punch cards to assembly language to high-level languages like Python, we're now evolving to programming in plain English (or any human language). Each evolution made programming more accessible while maintaining and improving, what we could build.

This accessibility is game-changing. It means domain experts can build their own tools, entrepreneurs can prototype faster, and the barrier between having an idea and creating software has nearly disappeared. But it also raises critical questions: How do we ensure quality when the programmer doesn't understand the underlying code? What happens to security, performance, and maintainability?

These concerns bring us to a fundamental question: If Natural Language Programming is truly the next evolution, how does it fit with the software engineering principles we've spent decades perfecting? Can we maintain the rigor of traditional development while embracing this radical accessibility?
To answer this, we need to first understand programming's historical evolution and why this moment is different from, yet connected to, everything that came before.

## The Evolution: From Assembly to Natural Language programming

Programming has always evolved toward greater human readability. Computers only understand machine language—pure sequences of 0s and 1s that directly control every circuit and operation. In the early days, programmers had to write these binary sequences directly, crafting long strings of code like `10110000 01100001`, which was virtually impossible for humans to read, write, or debug.

The first evolutionary leap came with assembly language, replacing those cryptic binary sequences with human-readable instructions that assemblers could translate back into machine language. This was revolutionary: instead of memorizing that `10110000 01100001` meant "move the value 97 into register AX," programmers could write something like like `MOV AX, 97` that actually made sense. But writing even simple programs still required hundreds of lines of these low-level instructions, remained slow and error-prone, and only specialists could master it.

Then came the next major evolution: compiled languages like C. These introduced compilers that could translate human-readable code into machine instructions. Suddenly, instead of dozens of assembly instructions to store and manipulate a number, programmers could simply write `int x = 1`. This wasn't just shorter, it was fundamentally clearer and more intuitive. More people could understand and write programs. This progression continued the pattern: each layer hid the complexities of the layer below while developing better translation tools to convert human-friendly code into machine language.

Next evolutionary leap came by introduction of languages that progressed far beyond their foundations, adding entirely new programming paradigms. Python, for instance, evolved from the C foundation but introduced revolutionary programmer-friendly features like automatic memory management, dynamic typing, object-oriented programming, and rich built-in data structures. A Python programmer can work with complex data structures and focus on solving problems without worrying about memory allocation, type declarations, or low-level implementation details. These languages didn't just add abstraction layers—they introduced fundamentally new ways of thinking about programming, trading some performance for massive gains in productivity, accessibility, and code maintainability.

Natural Language programming seems to fit the next evolutionary leap in this progression, but with a twist that fundamentally changes the nature of programming itself. Just as Python programmers don't worry about C internals, Natural Language programmers can focus purely on describing what they want to accomplish rather than how to implement it. They can express complex requirements in natural language and the AI generates the necessary implementation code.
At first glance, this seems like simply adding another layer to the stack we've been building for decades. But here's where this evolution diverges from all previous ones. When Python calls C functions, it's calling predetermined, tested code that behaves identically every time. These layers are deterministic: same input, same output, every time.
AI operates fundamentally differently. It doesn't translate your request through fixed rules like a compiler. Instead, it interprets intent and generates new solutions each time, bringing unprecedented flexibility to understand context and nuance in ways no previous abstraction layer could. But this revolutionary capability also introduces entirely new challenges: variability, unpredictability, and the need for human oversight, that no previous programming evolution has faced.

## Key Challenges of Natural Language programming

### The Output In-consistency

AIs are non-deterministic. This means they only predict the next token which has the highest probability based on their training data. This fundamental characteristic leads to hallucinations or, in simple terms, generating entirely wrong output.

When we compare this with traditional programming layers, the contrast becomes clear. When a modern programming language like Python uses C underneath the hood, there is a set of programs that always performs in the same way. This means the C language programs are deterministic.

Programming in natural language does not give us the same output every time. AI will create different output for the same prompt.

AI models right now work as sycophants. They try to please the user and achieve tasks as quickly as possible. While taking the shortcuts, some fundamental principles of software engineering are skipped or not considered.

There can be major security vulnerabilities in the AI geenrated software which can be easily exploited by hackers. Data security and data privacy standards are often not met in them. The performance of the software is also not be optimal.

These issues do not seem to have a big impact when creating programs just for demo purposes. However, when we want to make it live on the internet, these become critical.

This is not entirely AI's fault either. The human is also to be blamed.

### The Input Ambiguity

The input instructions are also non-deterministic. Everyone has their own writing style. Someone will add techincal details to their instructions. Someone might ask the AI to think step by step when creating the program. Prompting has become an important skill today when intertacting with AI models.

New AI models also have thinking modes, to enable the AI to analyze instructions step by step. To make a plan before writing the code. The important point here is that the quality of output will vary based on how well the input instructions are provided.

When we compare this with our analogy, any high-level programming language comes with a set of rules. These rules define how to write the code and what the syntaxes are. The programs do not run as expected if we do not follow the syntax or the rules set by the language.

However, in the case of natural language programming, there are no standardized rules for the input instructions.

When both challenges are combined, it amplifies the variability of the output by AIs.
Given these significant challenges, we might wonder if Natural Language programming is worth pursuing. The answer is yes, but only if we approach it with the right mindset and methodology.

## How to perfect the art of Natural Language programming

### Think like a software engineer

The most important shift when using AI for programming is adopting an engineering mindset rather than a "quick fix" mentality. Software engineers don't just make things work. They build solutions that are reliable, maintainable, and secure.

**Question everything the AI produces.** Just because the code runs doesn't mean it's good code. We need to ask ourselves: Is this secure? Will it handle edge cases? Can someone else understand and maintain this code? Is it efficient enough for production use? Engineers naturally think about what could go wrong and plan for those scenarios.

**Embrace the "why" behind decisions.** When an AI suggests a particular approach, we need to understand the reasoning. What are the trade-offs? Are there alternative solutions? We should not just accept the first working solution. We should evaluate options and choose the best one for the specific context.

**Think beyond the immediate problem.** Consider how our code fits into the larger system. Will it scale? How will it interact with other components? What happens when requirements change? We need to build with the future in mind, not just the present need.

**Adopt a security-first mindset.** Always assume our code will be attacked. What data are we handling? How are we validating inputs? What could a malicious user do with this code? AI often focuses on functionality over security, so we need to fill that gap.

**Value simplicity and clarity.** The best engineering solutions are often the simplest ones. If the AI generates complex code, ask if there's a simpler way. Remember: we'll need to maintain this code later, and so will others.

The key insight is this: while our tools have evolved dramatically, the fundamental principles of good software engineering remain unchanged. Following traditional SDLC principles is more important than ever while doing Natural Language programming.

### Follow SDLC principles

Software development follows the Software Development Lifecycle (SDLC). The steps of SDLC are Planning, Designing, Development, Testing, Maintenance and Re-iteration.

**Planning Phase:** Gathering and analyzing business requirements, defining project scope, identifying stakeholders, and creating project timelines and resource allocation plans.
x
Create comprehensive requirements documents that clearly define expected outputs and acceptance criteria. Establish testing scenarios early in the planning phase to ensure the final program meets all functional requirements. This structured approach helps the AI understand our intent more clearly and reduces the variability in output.

**Design Phase:**
Creating the system architecture, database design, user interface mockups, and technical specifications. This includes both high-level system design and detailed design documentation.

Define global standards that will guide the AI throughout the development process. This includes establishing security standards, performance benchmarks, and accessibility requirements as foundational instructions often called a Non Funcational Requirements (NFR)

**Development Phase:** During the actual coding phase, provide clear, explanatory instructions to the AI rather than ambiguous requests. Structure the prompts in a step-by-step manner that guides the AI through the logical flow of implementation.

This approach reduces the variability in AI output and ensures more consistent, predictable results. Think of the prompts as a form of "natural language syntax" that helps the AI understand not just what we want, but how we want it built.

**Testing Phase:** Systematically testing the software to identify and fix bugs is really important. This includes unit testing, integration testing, system testing, and user acceptance testing (UAT). We should rigorously test AI-generated programs against our predefined testing criteria. Conduct security vulnerability assessments to identify potential exploits, and perform performance analysis to ensure the code meets efficiency standards.

End-to-end testing becomes crucial to validate that all components work together seamlessly. Remember that AI-generated code may have different failure modes than traditionally written code, so comprehensive testing is even more important.

**Integration and Maintenance:** Implement proper version control practices by committing code to repositories for tracking and potential rollbacks. Conduct thorough code reviews, either personally or through expert consultation, before integrating AI-generated code into production systems.

It is essential to do ongoing support activities including bug fixes, performance optimization, security updates, and adding new features based on user feedback and changing requirements .

This review process helps catch issues that automated testing might miss and ensures that the code meets standards and best practices.

## The future of programming

Natural Language programming represents more than just a new tool, it's a fundamental shift in how we think about software creation. By following engineering principles and structured methodologies, we can harness AI's power while maintaining the quality standards that users deserve.

The democratization of programming through AI is inevitable. However, the responsibility to build safe, secure, and robust software remains with us. We require the understanding and applying the fundamental principles of software engineering in this new era of software developemnt. We owe this to our users, to keep the softwares safe and enjoyable.
