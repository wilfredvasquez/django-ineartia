<template>
    <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
        </div>
        <div class="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
          <div class="flex-shrink-0 flex items-right"></div>
          <div class="">
            <div class="flex space-x-4 p-5">
              <inertia-link class="text-white no-underline" :href="route('app:index')">Demo</inertia-link>
              <template v-if="$page.props.auth.user.id">
                <inertia-link class="text-white no-underline" :href="route('app:notes')">Notes</inertia-link>
              </template>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <template v-if="!$page.props.auth.user.id">
            <button class="bg-gray-800 space-x-4 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <inertia-link class="text-white no-underline" :href="route('authentication:login')">Login</inertia-link>
              <inertia-link class="text-white no-underline" :href="route('authentication:register')">Register</inertia-link>
            </button>
          </template>
          <!-- Profile dropdown -->
          <template v-if="$page.props.auth.user.id">
            <Menu as="div" class="ml-3 relative">
              <div class="flex space-x-4 p-5">
                <MenuButton class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <button class="bg-gray-800 space-x-4 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    {{ $page.props.auth.user.email }}
                  </button>
                </MenuButton>
                
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <inertia-link :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" :href="route('authentication:logout')">Logout</inertia-link>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </template>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <button class="bg-gray-800 space-x-4 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <inertia-link class="text-white" :href="route('authentication:login')">Login</inertia-link>
          <inertia-link class="text-white" :href="route('authentication:register')">Register</inertia-link>
        </button>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
    import { ref } from 'vue'
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'

    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
    ]
    export default {
        name: "Header",
        components: {
            "Disclosure": Disclosure,
            "DisclosureButton": DisclosureButton,
            "DisclosurePanel": DisclosurePanel,
            "Menu": Menu,
            "MenuButton": MenuButton,
            "MenuItem": MenuItem,
            "MenuItems": MenuItems,
            "BellIcon": BellIcon,
            "MenuIcon": MenuIcon,
            "XIcon": XIcon,
        },
        setup() {
            const open = ref(false)

            return {
              navigation,
              open,
            }
        },
    };
</script>