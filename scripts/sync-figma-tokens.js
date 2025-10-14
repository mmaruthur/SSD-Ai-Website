/**
 * Figma Design Tokens Sync Script
 * 
 * This script fetches design tokens from Figma and converts them
 * to formats usable in your Next.js application.
 * 
 * Setup:
 * 1. Get Figma Personal Access Token: https://www.figma.com/developers/api#access-tokens
 * 2. Get your Figma File Key from the URL: https://www.figma.com/file/FILE_KEY/...
 * 3. Create .env file with:
 *    FIGMA_TOKEN=your_token_here
 *    FIGMA_FILE_KEY=your_file_key_here
 * 4. Run: npm install --save-dev figma-api dotenv
 * 5. Run: npm run sync-figma
 */

require('dotenv').config();
const fs = require('fs');
const path = require('path');

// Figma API simulation (install figma-api package for real implementation)
async function syncFromFigma() {
  const token = process.env.FIGMA_TOKEN;
  const fileKey = process.env.FIGMA_FILE_KEY;

  if (!token || !fileKey) {
    console.error('❌ Missing FIGMA_TOKEN or FIGMA_FILE_KEY in .env file');
    console.log('\nSetup instructions:');
    console.log('1. Create a .env file in project root');
    console.log('2. Add: FIGMA_TOKEN=your_figma_token');
    console.log('3. Add: FIGMA_FILE_KEY=your_file_key');
    console.log('\nGet token: https://www.figma.com/developers/api#access-tokens');
    process.exit(1);
  }

  console.log('🎨 Syncing design tokens from Figma...\n');

  try {
    // Uncomment when you have figma-api installed:
    // const Figma = require('figma-api');
    // const api = new Figma.Api({ personalAccessToken: token });
    // const file = await api.getFile(fileKey);
    // const styles = await api.getFileStyles(fileKey);

    // For now, create a template structure
    const designTokens = {
      colors: {
        primary: '#1e3a8a',
        secondary: '#fbbf24',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      typography: {
        fontFamily: {
          sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        },
        fontSize: {
          xs: '0.75rem',
          sm: '0.875rem',
          base: '1rem',
          lg: '1.125rem',
          xl: '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '3.75rem',
          '7xl': '4.5rem',
        },
        fontWeight: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700,
        },
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        6: '1.5rem',
        8: '2rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
    };

    // Write to JSON file
    const outputPath = path.join(process.cwd(), 'design-tokens.json');
    fs.writeFileSync(outputPath, JSON.stringify(designTokens, null, 2));
    console.log('✅ Design tokens saved to design-tokens.json');

    // Generate CSS variables
    generateCSSVariables(designTokens);

    // Generate TypeScript types
    generateTypeScriptTypes(designTokens);

    console.log('\n🎉 Figma sync complete!');
    console.log('📝 Files updated:');
    console.log('   - design-tokens.json');
    console.log('   - src/styles/design-tokens.css');
    console.log('   - src/types/design-tokens.ts');
    
  } catch (error) {
    console.error('❌ Error syncing from Figma:', error.message);
    process.exit(1);
  }
}

function generateCSSVariables(tokens) {
  let css = '/* Auto-generated from Figma - Do not edit manually */\n\n:root {\n';
  
  // Colors
  css += '  /* Colors */\n';
  css += `  --color-primary: ${tokens.colors.primary};\n`;
  css += `  --color-secondary: ${tokens.colors.secondary};\n`;
  
  Object.entries(tokens.colors.gray).forEach(([shade, value]) => {
    css += `  --color-gray-${shade}: ${value};\n`;
  });
  
  // Typography
  css += '\n  /* Typography */\n';
  Object.entries(tokens.typography.fontSize).forEach(([size, value]) => {
    css += `  --font-size-${size}: ${value};\n`;
  });
  
  // Spacing
  css += '\n  /* Spacing */\n';
  Object.entries(tokens.spacing).forEach(([size, value]) => {
    css += `  --spacing-${size}: ${value};\n`;
  });
  
  css += '}\n';
  
  const outputPath = path.join(process.cwd(), 'src/styles/design-tokens.css');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, css);
  console.log('✅ CSS variables generated');
}

function generateTypeScriptTypes(tokens) {
  const types = `// Auto-generated from Figma - Do not edit manually

export interface DesignTokens {
  colors: {
    primary: string;
    secondary: string;
    gray: {
      [key: string]: string;
    };
  };
  typography: {
    fontFamily: {
      sans: string[];
    };
    fontSize: {
      [key: string]: string;
    };
    fontWeight: {
      [key: string]: number;
    };
  };
  spacing: {
    [key: string]: string;
  };
  borderRadius: {
    [key: string]: string;
  };
}

export const designTokens: DesignTokens = ${JSON.stringify(tokens, null, 2)};
`;
  
  const outputPath = path.join(process.cwd(), 'src/types/design-tokens.ts');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, types);
  console.log('✅ TypeScript types generated');
}

// Run the sync
syncFromFigma();
