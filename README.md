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

You can find the snippet in the website settings.

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
    array_of_values: ["value1", "value2"],
    key_with_empty_value: "",
    this_property_will_be_deleted: null,
  },
});
```

#### Add user to an account

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
    array_of_values: ["value1", "value2"],
    key_with_empty_value: "",
    this_property_will_be_deleted: null,
  },
});
```

#### Trigger an event

ð Use past tense for event names

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
