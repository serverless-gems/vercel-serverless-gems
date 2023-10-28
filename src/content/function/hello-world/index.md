---
title: Hello World
description: It`s a simple function that returns a string.
tags: [example]
---

```ts
import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
  })
}
```

Check the source code on [GitHub](https://github.com/{{ build.issues.owner }}/{{ build.issues.repo }}/blob/main/api/{{ title | slugify }}/index.ts).

{% include "./test.njk" %}
