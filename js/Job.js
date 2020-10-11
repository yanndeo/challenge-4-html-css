class Job {

  constructor(title, compagnie, description, validated_at, category, city) {
    this.title = title;
    this.companie = compagnie;
    this.description = description;
    this.validated_at = validated_at;
    this.city = city;
    this.created_at = this.dateNow();
  }

  dateNow() {
    return new Date().toISOString().slice(0, 10);
  }
}

export default Job;

let job1 = new Job(
  "Dev Symfony 4",
  "HIT Consution",
  "senoir dev apps with cdi",
  "2020-10-09",
  "4",
  "casablanca"
);
