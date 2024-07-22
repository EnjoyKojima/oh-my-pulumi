<script setup lang="ts">
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { toast } from '@/components/ui/toast'

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(z.object({
    username: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
  }))
})

const onSubmit = handleSubmit((values) => {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
})
</script>

<template>
  <form class="w-2/3 space-y-6" @submit="onSubmit">
    <!-- Username -->
    <FormField v-slot="{ componentField }" name="username">
      <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
        <Input type="text" placeholder="good name" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <!-- Password -->
    <FormField v-slot="{ componentField }" name="password">
      <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
        <Input type="password" placeholder="super secure password" v-bind="componentField" />
        </FormControl>
        <FormDescription>
          This is your private password.
        </FormDescription>
        <FormMessage />
      </FormItem>
    </FormField>
    <!-- Submit -->
    <Button type="submit">
      Submit
    </Button>
  </form>
</template>
