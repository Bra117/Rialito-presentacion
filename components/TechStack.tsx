const TECHS = ["Flutter", "Dart", "Provider", "Workmanager", "SharedPreferences", "local_auth"];

export default function TechStack() {
  return (
    <div className="stack">
      {TECHS.map((t) => (
        <span key={t}>{t}</span>
      ))}
    </div>
  );
}
