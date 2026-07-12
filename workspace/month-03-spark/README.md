# Month 03 · Distributed Batch Processing with Spark

**Phase:** Data Engineering  
**Curriculum:** [https://abrahamswamidass.github.io/posts/learning/roadmap/month-03.html](https://abrahamswamidass.github.io/posts/learning/roadmap/month-03.html)

Your working area for this month. Build in `code/`, drop diagrams and screenshots in `visuals/`, think out loud in `notes.md`, and stamp every study day in `log.md`.

## Concepts to master
`Spark architecture` · `Driver & executors` · `RDD/DataFrame/Dataset` · `Lazy evaluation` · `DAG` · `Transformations vs actions` · `Narrow vs wide` · `Shuffle` · `Partitioning` · `Broadcast join` · `Sort-merge join` · `Data skew` · `Caching` · `Catalyst optimizer` · `Delta Lake` · `Apache Iceberg` · `Hudi` · `Time travel` · `Schema evolution`

## Done-when checklist
- [ ] You've written a PySpark job that reads → transforms → aggregates → writes.
- [ ] You fixed a skewed join and can explain the shuffle behind it.
- [ ] You wrote a Delta/Iceberg table, did a MERGE, and used time travel to read a prior version.
- [ ] You can read a Spark UI DAG — stages, shuffle boundary, and the slowest task.
- [ ] You can compare Delta, Iceberg, and Hudi on demand and say when to pick each.

## What goes where
| Path | Use |
|------|-----|
| `code/` | Experiments, scripts, notebooks that test the ideas |
| `visuals/` | Diagrams, charts, screenshots, HTML/SVG you generate |
| `notes.md` | Concepts in your own words |
| `log.md` | Day-by-day entries (template in `../templates/`) |
