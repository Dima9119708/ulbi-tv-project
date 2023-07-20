import { cx, CxOptions, CxReturn } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const cn = (...options: CxOptions): CxReturn => twMerge(cx(...options));
