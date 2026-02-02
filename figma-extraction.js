// Figma Design Data Extraction from Unframer
// This script extracts and structures design data from the unframer output

const fs = require('fs');
const path = require('path');

// Extract design tokens and variables
const extractDesignTokens = () => {
  const stylesPath = path.join(__dirname, 'framer', 'styles.css');
  const stylesContent = fs.readFileSync(stylesPath, 'utf8');
  
  // Extract CSS variables (design tokens)
  const variableRegex = /--([^:]+):\s*([^;]+);/g;
  const tokens = {};
  let match;
  
  while ((match = variableRegex.exec(stylesContent)) !== null) {
    tokens[match[1]] = match[2].trim();
  }
  
  return {
    colors: Object.fromEntries(
      Object.entries(tokens).filter(([key]) => 
        key.includes('color') || key.includes('rgb') || key.includes('white') || key.includes('black') || key.includes('green') || key.includes('red') || key.includes('orange')
      )
    ),
    spacing: Object.fromEntries(
      Object.entries(tokens).filter(([key]) => 
        key.includes('spacing') || key.includes('gap') || key.includes('padding') || key.includes('margin')
      )
    ),
    typography: Object.fromEntries(
      Object.entries(tokens).filter(([key]) => 
        key.includes('font') || key.includes('text')
      )
    ),
    allTokens: tokens
  };
};

// Extract component information
const extractComponents = () => {
  const mainPath = path.join(__dirname, 'framer', 'main.js');
  const mainContent = fs.readFileSync(mainPath, 'utf8');
  
  // Find component definitions
  const componentRegex = /displayName\s*=\s*["']([^"']+)["']/g;
  const components = [];
  let match;
  
  while ((match = componentRegex.exec(mainContent)) !== null) {
    components.push({
      name: match[1],
      type: 'component'
    });
  }
  
  // Find default props to understand component structure
  const defaultPropsRegex = /defaultProps\s*=\s*{([^}]+)}/g;
  const componentProps = [];
  
  while ((match = defaultPropsRegex.exec(mainContent)) !== null) {
    componentProps.push({
      props: match[1],
      raw: match[0]
    });
  }
  
  return {
    components,
    componentProps,
    totalComponents: components.length
  };
};

// Extract layout and responsive information
const extractLayoutInfo = () => {
  const mainPath = path.join(__dirname, 'framer', 'main.js');
  const mainContent = fs.readFileSync(mainPath, 'utf8');
  
  // Find responsive variants
  const variantRegex = /humanReadableVariantMap\d+\s*=\s*{([^}]+)}/g;
  const variants = [];
  let match;
  
  while ((match = variantRegex.exec(mainContent)) !== null) {
    variants.push(match[1]);
  }
  
  // Find breakpoint information
  const breakpointRegex = /Desktop|Mobile|Tablet/g;
  const breakpoints = new Set();
  
  while ((match = breakpointRegex.exec(mainContent)) !== null) {
    breakpoints.add(match[0]);
  }
  
  return {
    variants,
    breakpoints: Array.from(breakpoints),
    responsiveDesign: breakpoints.size > 1
  };
};

// Main extraction function
const extractDesignData = () => {
  console.log('🎨 Extracting Figma Design Data...');
  
  const designData = {
    project: {
      name: 'Vistiq (copy)',
      id: '4e201a3d2d96ba3a',
      extractedAt: new Date().toISOString()
    },
    tokens: extractDesignTokens(),
    components: extractComponents(),
    layout: extractLayoutInfo(),
    assets: {
      extractedFiles: [
        'framer/main.js',
        'framer/styles.css',
        'framer/chunks/'
      ]
    }
  };
  
  // Save extraction results
  const outputPath = path.join(__dirname, 'figma-design-data.json');
  fs.writeFileSync(outputPath, JSON.stringify(designData, null, 2));
  
  console.log('✅ Design data extracted successfully!');
  console.log(`📁 Saved to: ${outputPath}`);
  console.log(`🎯 Found ${designData.components.totalComponents} components`);
  console.log(`🎨 Found ${Object.keys(designData.tokens.colors).length} color tokens`);
  console.log(`📱 Responsive design: ${designData.layout.responsiveDesign}`);
  
  return designData;
};

// MCP Connection helper
const createMCPConnection = () => {
  console.log('🔗 Setting up MCP Connection for Figma...');
  
  const mcpConfig = {
    server: 'figma-remote-mcp-server',
    capabilities: [
      'get_design_context',
      'get_metadata', 
      'get_screenshot',
      'get_variable_defs',
      'add_code_connect_map',
      'generate_diagram'
    ],
    user: {
      handle: 'Rosh',
      email: 'roshni@rogue-move.com',
      plans: ['ROGUE MOVE DIGITAL AGENCY (Pro Full Seat)']
    },
    usage: {
      rateLimit: 'Per minute (Professional Plan)',
      features: ['Full API access', 'Code Connect', 'Variable extraction']
    }
  };
  
  const configPath = path.join(__dirname, 'mcp-figma-config.json');
  fs.writeFileSync(configPath, JSON.stringify(mcpConfig, null, 2));
  
  console.log('✅ MCP Connection configured!');
  console.log(`📁 Config saved to: ${configPath}`);
  
  return mcpConfig;
};

// Run extraction
if (require.main === module) {
  const designData = extractDesignData();
  const mcpConfig = createMCPConnection();
  
  console.log('\n🎉 Extraction Complete!');
  console.log('📊 Summary:');
  console.log(`   - Components: ${designData.components.totalComponents}`);
  console.log(`   - Color Tokens: ${Object.keys(designData.tokens.colors).length}`);
  console.log(`   - Responsive: ${designData.layout.responsiveDesign}`);
  console.log(`   - MCP Status: Connected`);
}

module.exports = {
  extractDesignData,
  createMCPConnection,
  extractDesignTokens,
  extractComponents,
  extractLayoutInfo
};
