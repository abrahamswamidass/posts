# Month 04 · Streaming & Real-Time Data

**Phase:** Data Engineering  
**Curriculum:** [https://abrahamswamidass.github.io/posts/learning/roadmap/month-04.html](https://abrahamswamidass.github.io/posts/learning/roadmap/month-04.html)

Your working area for this month. Build in `code/`, drop diagrams and screenshots in `visuals/`, think out loud in `notes.md`, and stamp every study day in `log.md`.

## Concepts to master
`Event-driven architecture` · `Kafka topics & partitions` · `Offsets` · `Consumer groups` · `Log compaction` · `Retention` · `Delivery semantics` · `Exactly-once` · `Idempotent producer` · `Stream processing` · `Spark Structured Streaming` · `Apache Flink` · `Tumbling/sliding/session windows` · `Watermarks` · `Late data` · `CDC` · `Debezium` · `Backpressure` · `Lambda vs Kappa`

## Done-when checklist
- [ ] You have a running Kafka → Structured Streaming pipeline consuming a keyed event stream.
- [ ] You built a windowed aggregation with a watermark, and can explain what the watermark bounds and why.
- [ ] You demonstrated late-data handling — one late event folded in, one dropped past the bound.
- [ ] You can state your pipeline's delivery semantics precisely, and where at-least-once vs exactly-once holds.
- [ ] You can whiteboard Lambda vs Kappa and defend which one you'd pick for a given system.

## What goes where
| Path | Use |
|------|-----|
| `code/` | Experiments, scripts, notebooks that test the ideas |
| `visuals/` | Diagrams, charts, screenshots, HTML/SVG you generate |
| `notes.md` | Concepts in your own words |
| `log.md` | Day-by-day entries (template in `../templates/`) |
