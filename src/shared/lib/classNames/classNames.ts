import { cx, CxOptions, CxReturn } from 'class-variance-authority';
import { tailwindMerge } from 'shared/lib/tailwindMerge/tailwindMerge';

export const cn = (...options: CxOptions): CxReturn => tailwindMerge(cx(...options));
