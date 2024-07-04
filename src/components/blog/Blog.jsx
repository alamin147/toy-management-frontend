import React from "react";

const Blog = () => {
  document.title = "Wonder Spark toys | Blog";

  return (
    <div>
      <h2 className="mt-5 mb-5 bg-light py-5 text-center text-info text-center mb-5">
        Blogs
      </h2>
      <div className="fw-bold container mt-5">
        <p>
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </p>
        <p>
          Ans: Access tokens and refresh tokens are used in authentication and
          authorization protocols. An access token represents authorization to
          access specific resources and has a limited lifespan. A refresh token
          is a long-lived credential used to obtain a new access token. They
          should be securely stored on the client-side, such as using HTTP-only
          cookies or browser storage. Mobile apps can use secure storage
          mechanisms provided by the operating system.
        </p>

        <p className="mt-5">2. Compare SQL and NoSQL databases?</p>
        <p>
          Ans: SQL databases are suited for structured data and complex queries
          with strong consistency, but NoSQL databases are better for
          unstructured data, high scalability, and flexible schemas, but with
          less transactional guarantees. The choice depends on specific use
          cases and requirements.
        </p>
        <p className="mt-5">3. What is express js? What is Nest JS?</p>
        <p>
          Ans: Express.js is a lightweight web application framework for
          Node.js, and Nest.js is a server-side framework that builds on top of
          Express.js, providing additional features like a layered architecture
          and dependency injection to enhance scalability and maintainability.
          Nest.js leverages TypeScript and Angular concepts for building robust
          and scalable applications.
        </p>

        <p className="mt-5">
          4. What is MongoDB aggregate and how does it work?
        </p>
        <p className="mb-5">
          Ans: MongoDB's aggregation framework is a versatile feature that
          enables complex data processing and analysis within the database. It
          allows for advanced operations like filtering, grouping, sorting, and
          mathematical calculations through pipeline stages, making it ideal for
          data aggregation and transformation tasks.
        </p>
      </div>
    </div>
  );
};

export default Blog;
