import * as yup from 'yup';
import { Profile } from '../types';

export const profileSchema = yup.object<Profile>({
    first: yup.string().required('required'),
    lastname: yup.string().required('required'),
    age: yup.number().typeError('only numbers'),
});
