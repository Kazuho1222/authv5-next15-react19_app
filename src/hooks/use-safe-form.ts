import { useForm } from '@conform-to/react'

type FieldValues<T extends Record<string, any>> = Parameters<typeof useForm<T>
>[0]

export const useSafeForm = <T extends Record<string, any>>(
  options: Omit<FieldValues<T>, 'defaultValue'> &
    Required<Pick<FieldValues<T>, 'defaultValue'>>,
): ReturnType<typeof useForm<T>> => useForm<T>(options)