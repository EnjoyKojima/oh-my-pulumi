<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
</script>

<template>
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
                    Home
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="/about" :class="navigationMenuTriggerStyle()">
                    About
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink href="/login" :class="navigationMenuTriggerStyle()">
                    Login
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>