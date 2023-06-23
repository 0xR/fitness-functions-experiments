---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
title: Architecture Fitness Functions on the Frontend
---

# Architecture Fitness Functions on the Frontend

---

# Why

- Get architectural feedback before code review
- Gain insights, does the code even match your mental model?
- Prevent future architectural issues, also for new joiners
- Quantify your design in code, not just institutional knowledge or (outdated) diagrams
- Automate checks that are hard to do manually

---

# Solution

Dependency-Cruiser

<img src="https://repository-images.githubusercontent.com/74299372/239ed080-370b-11ea-8fe7-140cf7b90a33" />

---

# What

- Visualize your architecture
    - Modules level
    - Folder level
- Customizable visualization
- Powerful rules syntax for custom checks
- API for programmatic usage
- Supports: react, vue, svelte, typescript, vite, webpack, import aliases
- Good documentations
- Active development

---

# Example rules

- Components in a `page/` folder should not depend on another `page/` components
- Ensure your core domain folder does not depend on other folders
- Ensure test code is not leaking into your production code
- Shared components should be used 2 or more times
- Detect unused files that are not imported anywhere

---

# Example visualization

[link](https://github.com/sverweij/dependency-cruiser/blob/main/doc/real-world-samples.md)

---

# What about eslint-plugin-import?

- There is a lot of overlap
  - detecting circular dependencies
  - restricting certain imports
  - avoid test code in production code
- However, Dependency-Cruiser offers additional features:
  - Detecting orphaned files (not imported by anything)
  - Dynamically isolating sibling folders from each other
  - Detect how often a component is used

---

# Conclusion

- Without architecture fitness functions, your architecture will degrade over time
- Dependency-Cruiser is a great tool to automate enforcing a well-designed architecture
- It's easy to get started

## Downsides
- No integration with your editor
