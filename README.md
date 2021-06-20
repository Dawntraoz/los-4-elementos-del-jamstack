# Los 4 elementos del Jamstack

Proyecto demostración de las buenas prácticas del Jamstack usando Nuxt como generador de sitios estáticos, Storyblok como Headless CMS, Netlify como Hosting y Atomic Design como metodología de trabajo.

Demo: [Los 4 elementos del Jamstack](https://los-4-elementos-jamstack.dawntraoz.com)

> Para entender como funcionan Storyblok y Nuxt juntos os recomiendo echar un vistazo al artículo [Add a headless CMS to Nuxt in 5 minutes](https://www.storyblok.com/tp/headless-cms-nuxtjs).

## Primeros pasos

1. Crea un nuevo espacio en Storyblok.
2. Ve a Settings > API-Keys y copia el Preview Token en la variable STORYBLOK_TOKEN del archivo .env.example.
3. Renombra el archivo .env.example a .env.

> Para saber como montar un sitio multi idioma con Storyblok y Nuxt.js, tienes este artículo [The Complete Guide to Build a Full Blown Multilanguage Website with Nuxt.js](https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial).

## Para montar el proyecto

[Guía para desarrollar Los 4 elementos del Jamstack desde cero](https://los-4-elementos-jamstack.dawntraoz.com/docs)

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Recursos

En el apartado [Nuxt Technology Hub](https://www.storyblok.com/tc/nuxtjs) de Storyblok podrás encontrar más tutoriales y vídeos de cómo usar Storyblok con Vue y Nuxt.

Si necesitas resolver dudas sobre Nuxt en concreto, echa un vistazo a la [documentación de Nuxt](https://nuxtjs.org).
