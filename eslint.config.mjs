import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import nextPlugin from 'eslint-plugin-next';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  ...compat.extends('next/core-web-vitals'),
];
