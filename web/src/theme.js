// ─── DailyThoughts Design System ───────────────────────────────────────────
// Warm editorial palette — parchment, ink, amber

export const theme = {
  colors: {
    // Backgrounds
    cream:      '#faf7f2',
    parchment:  '#f0ead8',
    warmWhite:  '#fffef9',
    inkDark:    '#0a0804',
    ink:        '#1a1208',
    inkLight:   '#3d3020',
    inkMuted:   '#7a6a50',

    // Brand / Accent
    amber:      '#d97706',
    amberLight: '#fbbf24',
    amberPale:  '#fef3c7',
    amberDark:  '#92400e',

    // Semantic
    rose:       '#e11d48',
    rosePale:   '#fff1f2',
    sage:       '#4a7c59',
    sagePale:   '#f0fdf4',
    sky:        '#0369a1',

    // Borders / Dividers
    border:     '#e5d9c3',
    borderMid:  '#d4c4a8',
  },

  shadows: {
    sm:  '0 1px 4px rgba(26,18,8,0.07)',
    md:  '0 4px 16px rgba(26,18,8,0.10)',
    lg:  '0 8px 32px rgba(26,18,8,0.18)',
    xl:  '0 20px 60px rgba(26,18,8,0.28)',
    card:'0 2px 8px rgba(26,18,8,0.08), 0 0 0 1px rgba(229,217,195,0.6)',
  },

  radius: {
    sm:  '8px',
    md:  '12px',
    lg:  '16px',
    xl:  '20px',
    full:'9999px',
  },

  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body:    "'DM Sans', system-ui, sans-serif",
    mono:    "'DM Mono', 'Fira Code', monospace",
  },

  transition: 'all 0.18s cubic-bezier(0.4, 0, 0.2, 1)',
};

// ─── Reusable inline style blocks ────────────────────────────────────────────
export const sx = {
  card: {
    background: theme.colors.warmWhite,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: theme.radius.xl,
    boxShadow: theme.shadows.card,
  },
  input: {
    width: '100%',
    padding: '11px 14px',
    border: `1.5px solid ${theme.colors.border}`,
    borderRadius: theme.radius.md,
    fontSize: '14px',
    fontFamily: theme.fonts.body,
    color: theme.colors.ink,
    background: theme.colors.cream,
    outline: 'none',
    transition: theme.transition,
  },
  btnPrimary: {
    width: '100%',
    padding: '13px',
    background: theme.colors.amber,
    border: 'none',
    borderRadius: theme.radius.md,
    fontSize: '14px',
    fontWeight: '700',
    color: theme.colors.ink,
    cursor: 'pointer',
    transition: theme.transition,
    fontFamily: theme.fonts.body,
  },
  label: {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: theme.colors.inkLight,
    marginBottom: '6px',
    letterSpacing: '0.3px',
    fontFamily: theme.fonts.body,
  },
};
