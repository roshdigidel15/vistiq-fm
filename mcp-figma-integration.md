# Figma MCP Integration Guide

## 🎯 Overview
This guide shows how to use the Figma MCP (Model Context Protocol) server to extract design data and create connections between Figma designs and your codebase.

## 📊 Extraction Results

### Project Information
- **Name**: Vistiq (copy)
- **ID**: 4e201a3d2d96ba3a
- **Extracted**: 2026-02-02T13:27:29.263Z

### Design System Assets
- **Components**: 25 components extracted
- **Color Tokens**: 6 primary color tokens
- **Responsive Design**: ✅ Yes (Desktop, Mobile, Tablet)

### Color Palette
```css
--unframer-green-25: rgb(27, 100, 64)      /* Primary Green */
--unframer-headphone-petrol-black-25: rgb(62, 63, 65)  /* Dark Gray */
--unframer-orange-60: rgb(255, 85, 51)      /* Accent Orange */
--unframer-white-100: rgb(255, 255, 255)    /* White */
--unframer-red-98: rgb(255, 245, 245)       /* Light Red */
--unframer-red-50: rgb(255, 0, 0)           /* Red */
```

### Component Library
The following components were extracted:
1. **Main** - Primary layout component
2. **Button** - Interactive button elements
3. **Services Category Card** - Service showcase cards
4. **Shop Card** - Product display cards
5. **Statistic Card** - Data visualization cards
6. **Quotes** - Testimonial components
7. **Services Slider** - Carousel component
8. **Bentos - Why Choose Vistiq** - Feature grid
9. **Happy Clients** - Client showcase
10. **Profile Photo** - Avatar components
11. **Arrow** - Navigation arrows
12. **Tag** - Label components
13. **5-stars** - Rating display
14. **Phosphor** - Icon system

### Responsive Breakpoints
- **Desktop**: Full desktop layout
- **Mobile**: Mobile-optimized layout
- **Tablet**: Tablet-specific layout

## 🔗 MCP Connection Setup

### Authentication Status
- **User**: Rosh (roshni@rogue-move.com)
- **Plan**: ROGUE MOVE DIGITAL AGENCY (Pro Full Seat)
- **Rate Limit**: Per minute (Professional Plan)
- **Access Level**: Full API access

### Available MCP Tools
```javascript
// Design Context & Extraction
get_design_context()     // Extract UI code and assets
get_metadata()          // Get structure and node information
get_screenshot()        // Generate screenshots
get_variable_defs()     // Extract design variables

// Code Integration
add_code_connect_map()   // Map Figma nodes to code components
get_code_connect_map()  // Retrieve existing mappings
get_code_connect_suggestions() // Get mapping suggestions

// Visualization & Documentation
generate_diagram()      // Create flowcharts and diagrams
create_design_system_rules() // Generate design system guidelines
```

## 🚀 Usage Examples

### 1. Extract Design Context
```javascript
// Get UI code for a specific node
const designContext = await mcp1_get_design_context({
  fileKey: "your-figma-file-key",
  nodeId: "1:2",
  clientLanguages: "javascript,typescript,css",
  clientFrameworks: "react,vite"
});
```

### 2. Create Code Connect Mapping
```javascript
// Map a Figma component to React code
await mcp1_add_code_connect_map({
  nodeId: "1:2",
  fileKey: "your-figma-file-key",
  componentName: "ServicesCategoryCard",
  source: "./src/components/ServicesCategoryCard.tsx",
  label: "React"
});
```

### 3. Generate Design System Rules
```javascript
// Create design system documentation
const rules = await mcp1_create_design_system_rules({
  clientLanguages: "javascript,typescript,css",
  clientFrameworks: "react,vite"
});
```

## 📁 File Structure

```
Drsmithawebsitemake1Roshini-main/
├── figma-extraction.js              # Extraction script
├── figma-design-data.json           # Extracted design data
├── mcp-figma-config.json            # MCP configuration
├── mcp-figma-integration.md         # This guide
└── framer/                          # Unframer output
    ├── main.js                      # React components
    ├── styles.css                   # Design tokens
    └── chunks/                      # Component chunks
```

## 🛠 Integration Steps

### 1. Install Dependencies
```bash
npm install unframer @motionone/dom
```

### 2. Run Extraction
```bash
node figma-extraction.js
```

### 3. Use Extracted Components
```javascript
import './framer/styles.css'
import MainFramerComponent from './framer/main'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(255,_255,_255)]'>
      <MainFramerComponent.Responsive/>
    </div>
  );
}
```

### 4. Access Design Tokens
```css
/* Use extracted color tokens */
.my-component {
  background-color: var(--unframer-green-25);
  color: var(--unframer-white-100);
}
```

## 🔄 Next Steps

### For Direct Figma Access
1. Get your Figma file URL: `https://figma.com/design/[fileKey]/[fileName]`
2. Extract fileKey and nodeId from the URL
3. Use MCP tools for direct extraction

### For Code Integration
1. Map Figma components to your React components
2. Set up Code Connect for live synchronization
3. Create design system rules

### For Documentation
1. Generate diagrams of component relationships
2. Create design system documentation
3. Set up automated token extraction

## 🎨 Design System Recommendations

Based on the extracted data:

### Color System
- **Primary**: Green (rgb(27, 100, 64))
- **Secondary**: Petrol Black (rgb(62, 63, 65))
- **Accent**: Orange (rgb(255, 85, 51))
- **Neutral**: White and gray variations

### Component Strategy
- Use responsive variants for mobile/desktop
- Implement card-based layouts for services
- Include testimonial components for social proof
- Add statistics components for data display

### Layout Patterns
- Grid-based layouts for feature showcases
- Card components for service/product displays
- Slider components for content carousels
- Responsive breakpoints for all screen sizes

## 📞 Support

For MCP server issues:
1. Check authentication with `mcp1_whoami()`
2. Verify file permissions in Figma
3. Ensure proper fileKey and nodeId format
4. Review rate limits for your plan

For unframer issues:
1. Ensure all dependencies are installed
2. Check file permissions
3. Verify Framer project access
4. Review component export structure
