# How to See Changes Immediately

## Quick Fix (Do This First!)

1. **Hard Refresh Browser** (most important!)
   - Mac: `Cmd + Shift + R` or `Cmd + Option + R`
   - Windows: `Ctrl + Shift + R` or `Ctrl + F5`

2. **Disable Browser Cache** (while developing)
   - Open DevTools (F12 or Right-click → Inspect)
   - Go to **Network** tab
   - Check ✅ **"Disable cache"**
   - Keep DevTools open while developing

3. **Clear Browser Cache** (if still not working)
   - Chrome/Edge: Settings → Privacy → Clear browsing data → Cached images
   - Or use Incognito/Private window

## For Tailwind Config Changes

When you change `tailwind.config.js`:
1. Save the file
2. Touch `src/index.css` (add a space and save, or update the comment date)
3. Hard refresh browser (`Cmd + Shift + R`)

## Restart Dev Server

If changes still don't appear:
```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## Verify Changes Are Working

1. Make a small change to any component (add a space)
2. Save the file
3. You should see it update automatically in the browser
4. If not, hard refresh (`Cmd + Shift + R`)

## Troubleshooting

- **Colors not updating?** → Hard refresh + check DevTools Network tab for CSS file
- **Component changes not showing?** → Check browser console for errors
- **Still not working?** → Try incognito mode to bypass all cache
