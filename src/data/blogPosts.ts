export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-react-apps",
    title: "Building Scalable React Applications in 2024",
    excerpt: "Learn the best practices and patterns for building React applications that scale with your team and codebase.",
    content: `
# Building Scalable React Applications in 2024

When building modern React applications, scalability should be a top priority from day one. Here's what I've learned from years of building production apps.

## Component Architecture

The key to scalable React apps is a well-thought-out component architecture. I recommend organizing components into three categories:

1. **UI Components** - Pure, reusable components like buttons, inputs, and cards
2. **Feature Components** - Business logic specific components
3. **Page Components** - Top-level route components

## State Management

For state management, I've found that a combination of:
- React Query for server state
- Zustand for client state
- React Context for theme/auth

Works exceptionally well for most applications.

## Code Splitting

Always implement code splitting at the route level. This ensures your initial bundle stays small:

\`\`\`tsx
const Dashboard = lazy(() => import('./pages/Dashboard'));
\`\`\`

## Testing Strategy

A good testing pyramid includes:
- Unit tests for utilities and hooks
- Integration tests for features
- E2E tests for critical user flows

## Conclusion

Building scalable React apps is about making the right decisions early. Focus on component architecture, proper state management, and a solid testing strategy.
    `,
    date: "2024-12-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Best Practices"],
    featured: true,
  },
  {
    id: "2",
    slug: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics: A Practical Guide",
    excerpt: "Unlock the full power of TypeScript with advanced generic patterns that will make your code more flexible and type-safe.",
    content: `
# Mastering TypeScript Generics

Generics are one of TypeScript's most powerful features. Let's explore how to use them effectively.

## Basic Generics

At their core, generics allow you to create reusable components that work with multiple types:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Generic Constraints

You can constrain generics to ensure they have certain properties:

\`\`\`typescript
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}
\`\`\`

## Utility Types

TypeScript provides powerful built-in utility types:

- \`Partial<T>\` - Makes all properties optional
- \`Required<T>\` - Makes all properties required
- \`Pick<T, K>\` - Picks specific properties
- \`Omit<T, K>\` - Omits specific properties

## Conclusion

Mastering generics takes practice, but the payoff in code reusability and type safety is immense.
    `,
    date: "2024-12-10",
    readTime: "6 min read",
    tags: ["TypeScript", "Generics", "Tutorial"],
    featured: true,
  },
  {
    id: "3",
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: When to Use Each",
    excerpt: "A practical comparison of CSS Grid and Flexbox to help you choose the right layout tool for any situation.",
    content: `
# CSS Grid vs Flexbox

Both CSS Grid and Flexbox are powerful layout tools, but they excel in different scenarios.

## Flexbox: One-Dimensional Layouts

Flexbox is perfect for:
- Navigation bars
- Card rows
- Centering content
- Distributing space between items

## CSS Grid: Two-Dimensional Layouts

Grid shines when you need:
- Complex page layouts
- Magazine-style designs
- Equal-height columns
- Overlapping elements

## The Golden Rule

**Flexbox for components, Grid for layouts.**

Use Flexbox for arranging items within a component, and Grid for the overall page structure.

## Combining Both

The best layouts often combine both. Use Grid for the main page structure and Flexbox for component internals.
    `,
    date: "2024-12-05",
    readTime: "5 min read",
    tags: ["CSS", "Layout", "Tutorial"],
  },
  {
    id: "4",
    slug: "api-design-best-practices",
    title: "RESTful API Design: Best Practices for 2024",
    excerpt: "Design APIs that developers love to use with these battle-tested patterns and conventions.",
    content: `
# RESTful API Design Best Practices

Great API design makes the difference between a joy and a nightmare to work with.

## Resource Naming

- Use nouns, not verbs: \`/users\` not \`/getUsers\`
- Use plural forms: \`/users\` not \`/user\`
- Use kebab-case: \`/user-profiles\` not \`/userProfiles\`

## HTTP Methods

- GET: Retrieve resources
- POST: Create new resources
- PUT: Update entire resources
- PATCH: Partial updates
- DELETE: Remove resources

## Status Codes

Use appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Server Error

## Versioning

Always version your APIs: \`/api/v1/users\`

This allows you to make breaking changes without affecting existing clients.
    `,
    date: "2024-11-28",
    readTime: "7 min read",
    tags: ["API", "Backend", "Best Practices"],
  },
  {
    id: "5",
    slug: "web-performance-optimization",
    title: "Web Performance Optimization Techniques",
    excerpt: "Speed up your website with these proven optimization techniques that improve user experience and SEO.",
    content: `
# Web Performance Optimization

Performance is crucial for user experience and SEO. Here are key optimization techniques.

## Image Optimization

- Use modern formats (WebP, AVIF)
- Implement lazy loading
- Serve responsive images
- Use CDNs for delivery

## JavaScript Optimization

- Code splitting
- Tree shaking
- Minification
- Defer non-critical scripts

## CSS Optimization

- Remove unused CSS
- Inline critical CSS
- Minify stylesheets
- Use CSS containment

## Caching Strategies

- Browser caching
- CDN caching
- Service workers
- Cache invalidation strategies

## Measuring Performance

Use tools like:
- Lighthouse
- WebPageTest
- Core Web Vitals
- Real User Monitoring (RUM)
    `,
    date: "2024-11-20",
    readTime: "9 min read",
    tags: ["Performance", "Optimization", "Web"],
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter((post) => post.featured);
};
