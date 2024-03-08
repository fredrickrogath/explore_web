<template>
    <div
        class="flex justify-between py-1 bg-white/1 backdrop-blur-sm fixed bottom-0 z-20 w-full sm:hidden"
      >

        <nuxt-link
          class=""
          href="/"
        >
        <IconsHomeFilled v-if="$route.path === '/'"/>
        <IconsHomeEmpty v-else/>
        </nuxt-link>

        <nuxt-link
          class=""
          href="/search"
        >
        <IconsSearchFilled v-if="$route.path === '/search'"/>
        <IconsSearchEmpty v-else/>
        </nuxt-link>

        <nuxt-link
          class=""
          href="/add"
        >
        <IconsAddFilled v-if="$route.path === '/add'"/>
        <IconsAddEmpty v-else/>
        </nuxt-link>
        
        <nuxt-link
          class=""
          href="/delivery"
        >
        <IconsDeliveryFilled v-if="$route.path === '/delivery'"/>
        <IconsDeliveryEmpty v-else/>
        </nuxt-link>

        <nuxt-link
          class=""
          href="/profile/business"
        >
        <IconsUserFilled v-if="$route.path === '/profile/business'"/>
        <IconsUserEmpty v-else/>
        </nuxt-link>

      </div>
</template>