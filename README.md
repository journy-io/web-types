# Web types

![npm](https://img.shields.io/npm/v/@journyio/web-types?color=%234d84f5&style=flat-square)
[![npm downloads](https://img.shields.io/npm/dm/@journyio/web-types?style=flat-square)](https://www.npmjs.com/package/@journyio/web-types)

Enables type-safe usage of our website snippet. A full web SDK will be released later this year.

## 💾 Installation

You can use your package manager (`npm` or `yarn`) to install:

```bash
npm install --save @journyio/web-types
```
or
```bash
yarn add @journyio/web-types
```

## 🔌 Getting started

💡 You can find the snippet in the website settings

```ts
import "@journyio/web-types";
```

### Methods

#### Initialise

```ts
journy("init", {
  // required
  trackerId: "ABC",
  domain: "https://go.acme.com",
});
```

#### Send page view

```ts
journy("pageview");
```

#### Identify user

💡 A user ID should be a robust, static, unique identifier that you recognize a user by in your own systems. Because these IDs are consistent across a customer’s lifetime, you should include a user ID in identify calls as often as you can. Ideally, the user ID should be a database ID.

💡 journy.io does not recommend using simple email addresses or usernames as user ID, as these can change over time. journy.io recommends that you use static IDs instead, so the IDs never change. When you use a static ID, you can still recognize the user in your analytics tools, even if the user changes their email address.

💡 The properties `full_name`, `first_name`, `last_name`, `phone` and `registered_at` will be used for creating contacts in destinations like Intercom, HubSpot, Salesforce, ...

```ts
journy("identify", {
  // Email or user ID is required
  email: "john.doe@acme.com",
  // Unique identifier for the user in your database
  userId: "20",

  // Optional
  // Hash of the user ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",

  // Optional
  properties: {
    full_name: "John Doe",
    // or
    first_name: "John",
    last_name: "Doe",

    phone: "123",
    registered_at: new Date(/* ... */),
    is_admin: true,
    key_with_empty_value: "",
    this_property_will_be_deleted: null,
  },
});
```

#### Add user to an account

💡 An account ID should be a robust, static, unique identifier that you recognize an account by in your own systems. Ideally, the account ID should be a database ID.

💡 The properties `name`, `mrr`, `plan` and `registered_at` will be used to create companies in destinations like Intercom, HubSpot, Salesforce, ...

```ts
journy("account", {
  // Required
  // Unique identifier for the account in your database
  accountId: "30",

  // Optional
  // Hash of the account ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",

  // Optional
  properties: {
    name: "ACME, Inc",
    mrr: 399,
    plan: "Pro",
    registered_at: new Date(/* ... */),
    is_paying: true,
    key_with_empty_value: "",
    this_property_will_be_deleted: null,
  },
});
```

#### Trigger an event

💡 Use past tense for event names

```ts
// User events
journy("event", {
  // required
  name: "logged_in",

  // optional
  metadata: {
    key: "value",
  },
});

// Account events
journy("event", {
  // required
  name: "created_invoice",
  accountId: "30",

  // Optional
  // Hash of the account ID using a backend secret
  // You can find the secret in the website settings
  // Recommended to prevent spoofing
  verification: "hash",

  // optional
  metadata: {
    key: "value",
    amount: 100,
    allow_wire_transfer: true,
  },
});
```

## 🔒 Security

If you discover any security related issues, please email security at journy io instead of using the issue tracker.
