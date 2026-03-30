export function getSuggestion(temp: number, personality: string): string {
  if (temp < 10) {
    if (personality === "introvert") {
      return "Bliv inde og hyg dig med en bog 📖";
    } else {
      return "Inviter en ven over eller lav noget socialt hjemme 🤝";
    }
  }

  if (temp > 20) {
    if (personality === "introvert") {
      return "Tag en rolig gåtur alene i solen 🌿";
    } else {
      return "Gå ud og vær social i solen ☀️";
    }
  }

  return "Tag en stille dag 🌸";
}