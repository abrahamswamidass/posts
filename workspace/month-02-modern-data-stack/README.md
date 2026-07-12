# Month 02 · The Modern Data Stack & Cloud Warehousing

**Phase:** Data Engineering  
**Curriculum:** [https://abrahamswamidass.github.io/posts/learning/roadmap/month-02.html](https://abrahamswamidass.github.io/posts/learning/roadmap/month-02.html)

Your working area for this month. Build in `code/`, drop diagrams and screenshots in `visuals/`, think out loud in `notes.md`, and stamp every study day in `log.md`.

## Concepts to master
`Separation of storage & compute` · `Snowflake architecture` · `BigQuery slots & pricing` · `Databricks lakehouse` · `Columnar & MPP` · `Micro-partitions` · `Partitioning & clustering` · `Pruning` · `dbt models & sources` · `Materializations` · `Incremental models` · `Jinja & macros` · `ELT in practice` · `Query cost optimization`

## Done-when checklist
- [ ] You have a working dbt project running bronze → silver → gold on a real warehouse.
- [ ] Your models have passing dbt tests and a generated lineage-graph doc site.
- [ ] You built one incremental model and can explain why its merge is idempotent.
- [ ] You reduced a query's bytes-scanned via partitioning/clustering and know exactly why it worked.
- [ ] You can pick Snowflake vs BigQuery vs Databricks for a given scenario and defend the choice.

## What goes where
| Path | Use |
|------|-----|
| `code/` | Experiments, scripts, notebooks that test the ideas |
| `visuals/` | Diagrams, charts, screenshots, HTML/SVG you generate |
| `notes.md` | Concepts in your own words |
| `log.md` | Day-by-day entries (template in `../templates/`) |
