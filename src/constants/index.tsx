import {
  DynamicForm,
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPage,
  RegisterPage
} from '../pages'

export const LINKS = [
  {
    component: RegisterPage,
    label: 'Custom form',
    path: '/custom-form'
  },
  {
    component: FormikBasicPage,
    label: 'Formik Basic',
    path: '/formik-basic'
  },
  {
    component: FormikYupPage,
    label: 'Formik Yup',
    path: '/formik-yup'
  },
  {
    component: FormikAbstraction,
    label: 'Formik Abstraction',
    path: '/formik-abstraction'
  },
  {
    component: FormikComponents,
    label: 'Formik components',
    path: '/formik-components'
  },
  {
    component: DynamicForm,
    label: 'Dynamic Form',
    path: '/dynamic-form'
  }
]
