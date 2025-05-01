/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}',  './styles/**/*.{css}',],
  
  safelist: [
    // === Blue ===
    // Light Background
    'bg-blue-25', 'bg-blue-50', 'bg-blue-100', 'bg-blue-200', 'bg-blue-300',
    // Dark Background
    'bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900', 'bg-blue-950',
    // Light Text
    'text-blue-25', 'text-blue-50', 'text-blue-100', 'text-blue-200', 'text-blue-300',
    // Dark Text
    'text-blue-400', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900', 'text-blue-950',

  
    // === Orange ===
    // Light Background
    'bg-orange-25', 'bg-orange-50', 'bg-orange-100', 'bg-orange-200', 'bg-orange-300',
    // Dark Background
    'bg-orange-400', 'bg-orange-500', 'bg-orange-600', 'bg-orange-700', 'bg-orange-800', 'bg-orange-900', 'bg-orange-950',
    // Light Text
    'text-orange-25', 'text-orange-50', 'text-orange-100', 'text-orange-200', 'text-orange-300',
    // Dark Text
    'text-orange-400', 'text-orange-500', 'text-orange-600', 'text-orange-700', 'text-orange-800', 'text-orange-900', 'text-orange-950',

  
    // === Purple ===
    // Light Background
    'bg-purple-25', 'bg-purple-50', 'bg-purple-100', 'bg-purple-200', 'bg-purple-300',
    // Dark Background
    'bg-purple-400', 'bg-purple-500', 'bg-purple-600', 'bg-purple-700', 'bg-purple-800', 'bg-purple-900', 'bg-purple-950',
    // Light Text
    'text-purple-25', 'text-purple-50', 'text-purple-100', 'text-purple-200', 'text-purple-300',
    // Dark Text
    'text-purple-400', 'text-purple-500', 'text-purple-600', 'text-purple-700', 'text-purple-800', 'text-purple-900', 'text-purple-950',

  
    // === Slate ===
    // Light Background
    'bg-slate-25', 'bg-slate-50', 'bg-slate-100', 'bg-slate-200', 'bg-slate-300',
    // Dark Background
    'bg-slate-400', 'bg-slate-500', 'bg-slate-600', 'bg-slate-700', 'bg-slate-800', 'bg-slate-900', 'bg-slate-950',
    // Light Text
    'text-slate-25', 'text-slate-50', 'text-slate-100', 'text-slate-200', 'text-slate-300',
    // Dark Text
    'text-slate-400', 'text-slate-500', 'text-slate-600', 'text-slate-700', 'text-slate-800', 'text-slate-900', 'text-slate-950',

  
  
    // === Gray ===
    // Light Background
    'bg-gray-25', 'bg-gray-50', 'bg-gray-100', 'bg-gray-200', 'bg-gray-300',
    // Dark Background
    'bg-gray-400', 'bg-gray-500', 'bg-gray-600', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900', 'bg-gray-950',
    // Light Text
    'text-gray-25', 'text-gray-50', 'text-gray-100', 'text-gray-200', 'text-gray-300',
    // Dark Text
    'text-gray-400', 'text-gray-500', 'text-gray-600', 'text-gray-700', 'text-gray-800', 'text-gray-900', 'text-gray-950',
  
    // === Zinc ===
    // Light Background
    'bg-zinc-25', 'bg-zinc-50', 'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-300',
    // Dark Background
    'bg-zinc-400', 'bg-zinc-500', 'bg-zinc-600', 'bg-zinc-700', 'bg-zinc-800', 'bg-zinc-900', 'bg-zinc-950',
    // Light Text
    'text-zinc-25', 'text-zinc-50', 'text-zinc-100', 'text-zinc-200', 'text-zinc-300',
    // Dark Text
    'text-zinc-400', 'text-zinc-500', 'text-zinc-600', 'text-zinc-700', 'text-zinc-800', 'text-zinc-900', 'text-zinc-950',
  
  
    // === Red ===
    'bg-red-25', 'bg-red-50', 'bg-red-100', 'bg-red-200', 'bg-red-300',
    // Dark Background
    'bg-red-400', 'bg-red-500', 'bg-red-600', 'bg-red-700', 'bg-red-800', 'bg-red-900', 'bg-red-950',
    // Light Text
    'text-red-25', 'text-red-50', 'text-red-100', 'text-red-200', 'text-red-300',
    // Dark Text
    'text-red-400', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900', 'text-red-950',
  
    // === Green ===
    'bg-green-25', 'bg-green-50', 'bg-green-100', 'bg-green-200', 'bg-green-300',
    // Dark Background
    'bg-green-400', 'bg-green-500', 'bg-green-600', 'bg-green-700', 'bg-green-800', 'bg-green-900', 'bg-green-950',
    // Light Text
    'text-green-25', 'text-green-50', 'text-green-100', 'text-green-200', 'text-green-300',
    // Dark Text
    'text-green-400', 'text-green-500', 'text-green-600', 'text-green-700', 'text-green-800', 'text-green-900', 'text-green-950',
  
    // === Yellow ===
    'bg-yellow-25', 'bg-yellow-50', 'bg-yellow-100', 'bg-yellow-200', 'bg-yellow-300',
    // Dark Background
    'bg-yellow-400', 'bg-yellow-500', 'bg-yellow-600', 'bg-yellow-700', 'bg-yellow-800', 'bg-yellow-900', 'bg-yellow-950',
    // Light Text
    'text-yellow-25', 'text-yellow-50', 'text-yellow-100', 'text-yellow-200', 'text-yellow-300',
    // Dark Text
    'text-yellow-400', 'text-yellow-500', 'text-yellow-600', 'text-yellow-700', 'text-yellow-800', 'text-yellow-900', 'text-yellow-950',

    // === Mono ===
    'bg-black-0', 'bg-white-0',

    // Light Text (on dark backgrounds)
    'text-white-100', // primary
    'text-white-80',  // secondary
    'text-white-60',  // disabled

    // Dark Text (on light backgrounds)
    'text-black-100', // primary
    'text-black-80',  // secondary
    'text-black-60',  // disabled
  ],
  
  theme: {
    extend: {
      colors: {
        //  Accent color
          'blue-25': '#F8FAFC',
          'blue-50': '#F1F5FD',
          'blue-100': '#DFE9FA',
          'blue-200': '#C6D8F7',
          'blue-300': '#9EBFF2',
          'blue-400': '#719DE9',
          'blue-500': '#4F7BE2',
          'blue-600': '#3358D4',
          'blue-700': '#314CC4',
          'blue-800': '#2E3F9F',
          'blue-900': '#2A397E',
          'blue-950': '#1E254D',

          'orange-25': '#fffaf4',
          'orange-50': '#fff7ed',
          'orange-100': '#ffedd5',
          'orange-200': '#fed7aa',
          'orange-300': '#fdba74',
          'orange-400': '#fb923c',
          'orange-500': '#f97316',
          'orange-600': '#ea580c',
          'orange-700': '#c2410c',
          'orange-800': '#9a3412',
          'orange-900': '#7c2d12',
          'orange-950': '#1E254D',

          'purple-25': '#f9f7ff',
          'purple-50': '#faf5ff',
          'purple-100': '#f3e8ff',
          'purple-200': '#e9d5ff',
          'purple-300': '#d8b4fe',
          'purple-400': '#c084fc',
          'purple-500': '#a855f7',
          'purple-600': '#9333ea',
          'purple-700': '#7e22ce',
          'purple-800': '#6b21a8',
          'purple-900': '#581c87',
          'purple-950': '#3b0764',

        //  Neutral color
          'slate-25': '#fbfcfd',
          'slate-50': '#f8fafc',
          'slate-100': '#f1f5f9',
          'slate-200': '#e2e8f0',
          'slate-300': '#cbd5e1',
          'slate-400': '#94a3b8',
          'slate-500': '#64748b',
          'slate-600': '#475569',
          'slate-700': '#334155',
          'slate-800': '#1e293b',
          'slate-900': '#0f172a',
          'slate-950': '#020617',

          'gray-25': '#fbfbfc',
          'gray-50': '#f9fafb',
          'gray-100': '#f3f4f6',
          'gray-200': '#e5e7eb',
          'gray-300': '#d1d5db',
          'gray-400': '#9ca3af',
          'gray-500': '#6b7280',
          'gray-600': '#4b5563',
          'gray-700': '#374151',
          'gray-800': '#1f2937',
          'gray-900': '#111827',
          'gray-950': '#030712',

          'zinc-25': '#fcfcfc',
          'zinc-50': '#fafafa',
          'zinc-100': '#f4f4f5',
          'zinc-200': '#e4e4e7',
          'zinc-300': '#d4d4d8',
          'zinc-400': '#a1a1aa',
          'zinc-500': '#71717a',
          'zinc-600': '#52525b',
          'zinc-700': '#3f3f46',
          'zinc-800': '#27272a',
          'zinc-900': '#18181b',
          'zinc-950': '#09090b',

        //  Semantics color
          'red-25': '#fef7f7',
          'red-50': '#fef2f2',
          'red-100': '#fee2e2',
          'red-200': '#fecaca',
          'red-300': '#fca5a5',
          'red-400': '#f87171',
          'red-500': '#ef4444',
          'red-600': '#dc2626',
          'red-700': '#b91c1c',
          'red-800': '#991b1b',
          'red-900': '#7f1d1d',
          'red-950': '#450a0a',

          'green-25': '#f4fdf7',
          'green-50': '#f0fdf4',
          'green-100': '#dcfce7',
          'green-200': '#bbf7d0',
          'green-300': '#86efac',
          'green-400': '#4ade80',
          'green-500': '#22c55e',
          'green-600': '#16a34a',
          'green-700': '#15803d',
          'green-800': '#166534',
          'green-900': '#14532d',
          'green-950': '#052e16',

          'yellow-25': '#fefdea',
          'yellow-50': '#fefce8',
          'yellow-100': '#fef9c3',
          'yellow-200': '#fef08a',
          'yellow-300': '#fde047',
          'yellow-400': '#facc15',
          'yellow-500': '#eab308',
          'yellow-600': '#ca8a04',
          'yellow-700': '#a16207',
          'yellow-800': '#854d0e',
          'yellow-900': '#713f12',
          'yellow-950': '#422006',

        // Mono color
          'black-100': 'rgba(255, 255, 255, 1)',   // primary = 100%
          'black-80': 'rgba(255, 255, 255, 0.8)',  // secondary = 80%
          'black-60': 'rgba(255, 255, 255, 0.6)',  // disabled = 60%
          'black-0':'#101010',

          'white-100': 'rgba(26, 26, 26, 1)',   // primary = 100%
          'white-80': 'rgba(26, 26, 26, 0.8)',  // secondary = 80%
          'white-60': 'rgba(26, 26, 26, 0.6)',  // disabled = 60%
          'white-0':'#FFFFFF',

      },

      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },

      boxShadow: {
        //small
          'smallshadow-xs': '0px 1px 4px -1px rgba(32, 32, 32, 0.02)',
          'smallshadow-sm': '0px 2px 4px -1px rgba(32, 32, 32, 0.02), 0px 0px 4px 0px rgba(32, 32, 32, 0.02)',
          'smallshadow-md': '0px 4px 4px 0px rgba(32, 32, 32, 0.02), 0px 0px 4px -1px rgba(32, 32, 32, 0.02)',
          'smallshadow-l': '0px 0px 6px 0px rgba(32, 32, 32, 0.02), 0px 6px 6px 0px rgba(32, 32, 32, 0.02)',

          'smallshadowfocused-xs': '0px 0px 0px 0.8px rgba(32, 32, 32, 0.05)',
          'smallshadowfocused-sm': '0px 0px 0px 1.2px rgba(32, 32, 32, 0.05)',
          'smallshadowfocused-md': '0px 0px 0px 1.5px rgba(32, 32, 32, 0.05)',
          'smallshadowfocused-l': '0px 0px 0px 1.9px rgba(32, 32, 32, 0.05)',

        //medium
          'mediumshadow-xs': '0px 5px 10px -1px rgba(32, 32, 32, 0.04)',
          'mediumshadow-sm': '0px 6px 12px -1px rgba(32, 32, 32, 0.04)',
          'mediumshadow-md': '0px 7px 14px 0px rgba(32, 32, 32, 0.04), 0px 0px 6px -1px rgba(32, 32, 32, 0.04)',
          'mediumshadow-l': '0px 8px 16px 0px rgba(32, 32, 32, 0.04), 0px 0px 8px -1px rgba(32, 32, 32, 0.04)',

          'mediumshadowfocused-xs': '0px 0px 0px 2px rgba(32, 32, 32, 0.05)',
          'mediumshadowfocused-sm': '0px 0px 0px 3px rgba(32, 32, 32, 0.05)',
          'mediumshadowfocused-md': '0px 0px 0px 4px rgba(32, 32, 32, 0.05)',
          'mediumshadowfocused-l': '0px 0px 0px 5px rgba(32, 32, 32, 0.05)',

        //large
          'largeshadow-xs': '0px 8px 16px 0px rgba(32, 32, 32, 0.04), 0px 0px 8px -1px rgba(32, 32, 32, 0.04)',
          'largeshadow-sm': '0px 9px 18px 0px rgba(32, 32, 32, 0.04), 0px 0px 9px -1px rgba(32, 32, 32, 0.04)',
          'largeshadow-md': '0px 10px 20px 0px rgba(32, 32, 32, 0.04), 0px 0px 10px -1px rgba(32, 32, 32, 0.04)',
          'largeshadow-l': '0px 10px 20px 0px rgba(32, 32, 32, 0.04), 0px 0px 10px 0px rgba(32, 32, 32, 0.04)',
      },

      blur: {
          'softblur-xs': '2px',
          'softblur-sm': '4px',
          'softblur-md': '8px',
          'softblur-l': '12px',
      },

      fontSize: {
        'display-sm': ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.05rem' }], // 40px / 48px / -0.8px
        'display-md': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.06rem' }], // 48px / 56px / -0.96px
        'display-l': ['3.5rem', { lineHeight: '4.25rem', letterSpacing: '-0.07rem' }],   // 56px / 68px / -1.12px

        'heading-xs': ['1.25rem', { lineHeight: '1.5rem', letterSpacing: '-0.01875rem' }], // 20px / 24px / -0.3px
        'heading-sm': ['1.5rem', { lineHeight: '1.75rem', letterSpacing: '-0.0225rem' }],  // 24px / 28px / -0.36px
        'heading-md': ['2rem', { lineHeight: '2.375rem', letterSpacing: '-0.03rem' }],      // 32px / 38px / -0.48px
        'heading-l': ['2.25rem', { lineHeight: '2.75rem', letterSpacing: '-0.03375rem' }], // 36px / 44px / -0.54px

        'paragraph-xs': ['0.75rem', { lineHeight: '1.125rem' }], // 12px / 18px
        'paragraph-sm': ['0.875rem', { lineHeight: '1.25rem' }], // 14px / 20px
        'paragraph-md': ['1rem', { lineHeight: '1.5rem' }],       // 16px / 24px
        'paragraph-l': ['1.125rem', { lineHeight: '1.75rem' }], // 18px / 28px

        'button-text-sm': ['0.75rem', { lineHeight: '1', letterSpacing: '0.015em' }],  // 12px / 12px / 0.24px
        'button-text-md': ['0.875rem', { lineHeight: '1', letterSpacing: '0.0175em' }], // 14px / 14px / 0.28px
        'button-text-l': ['1rem', { lineHeight: '1', letterSpacing: '0.02em' }],     // 16px / 16px / 0.32px

        'label-xs': ['0.625rem', { lineHeight: '0.75rem', letterSpacing: '0.0075em' }], // 10px / 12px / 0.12px
        'label-sm': ['0.75rem', { lineHeight: '0.875rem', letterSpacing: '0.009em' }], // 12px / 14px / 0.144px
        'label-md': ['0.875rem', { lineHeight: '1rem', letterSpacing: '0.0105em' }], // 14px / 16px / 0.168px
        'label-l': ['1rem', { lineHeight: '1.25rem', letterSpacing: '0.012em' }],   // 16px / 20px / 0.192px
      },
    },
  },
  plugins: [],
};