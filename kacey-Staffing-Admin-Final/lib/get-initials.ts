export function getInitials(nameOrEmail: string) {
  const clean = nameOrEmail.replace(/@.*$/, "") // drop domain if it’s an email
  const parts = clean.split(/[ ._-]+/).filter(Boolean)
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}
