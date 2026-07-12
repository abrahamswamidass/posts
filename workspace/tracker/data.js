// Auto-generated from the curriculum pages. Do not edit by hand;
// regenerate with scratchpad/gen_workspace.py if the roadmap changes.
window.ROADMAP = [
  {
    "num": "01",
    "title": "Foundations & the Language of Data Architecture",
    "phase": "data",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-01.html",
    "doneWhen": [
      "You can declare the grain of a fact table out loud before touching a keyboard.",
      "You've built a working star schema with surrogate keys and loaded sample data.",
      "You can explain all six SCD types and pick the right one in under 30 seconds.",
      "You wrote a one-page ADR justifying your modeling decisions.",
      "You survived Claude's mock architect screen with a readiness score you're proud of."
    ],
    "concepts": [
      "OLTP vs OLAP",
      "ETL vs ELT",
      "Normalization (1NF–3NF)",
      "Dimensional modeling",
      "Star & snowflake schema",
      "Fact & dimension tables",
      "Grain",
      "Slowly Changing Dimensions",
      "Surrogate keys",
      "Medallion architecture",
      "Idempotency",
      "Warehouse vs Lake vs Lakehouse"
    ]
  },
  {
    "num": "02",
    "title": "The Modern Data Stack & Cloud Warehousing",
    "phase": "data",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-02.html",
    "doneWhen": [
      "You have a working dbt project running bronze → silver → gold on a real warehouse.",
      "Your models have passing dbt tests and a generated lineage-graph doc site.",
      "You built one incremental model and can explain why its merge is idempotent.",
      "You reduced a query's bytes-scanned via partitioning/clustering and know exactly why it worked.",
      "You can pick Snowflake vs BigQuery vs Databricks for a given scenario and defend the choice."
    ],
    "concepts": [
      "Separation of storage & compute",
      "Snowflake architecture",
      "BigQuery slots & pricing",
      "Databricks lakehouse",
      "Columnar & MPP",
      "Micro-partitions",
      "Partitioning & clustering",
      "Pruning",
      "dbt models & sources",
      "Materializations",
      "Incremental models",
      "Jinja & macros",
      "ELT in practice",
      "Query cost optimization"
    ]
  },
  {
    "num": "03",
    "title": "Distributed Batch Processing with Spark",
    "phase": "data",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-03.html",
    "doneWhen": [
      "You've written a PySpark job that reads → transforms → aggregates → writes.",
      "You fixed a skewed join and can explain the shuffle behind it.",
      "You wrote a Delta/Iceberg table, did a MERGE, and used time travel to read a prior version.",
      "You can read a Spark UI DAG — stages, shuffle boundary, and the slowest task.",
      "You can compare Delta, Iceberg, and Hudi on demand and say when to pick each."
    ],
    "concepts": [
      "Spark architecture",
      "Driver & executors",
      "RDD/DataFrame/Dataset",
      "Lazy evaluation",
      "DAG",
      "Transformations vs actions",
      "Narrow vs wide",
      "Shuffle",
      "Partitioning",
      "Broadcast join",
      "Sort-merge join",
      "Data skew",
      "Caching",
      "Catalyst optimizer",
      "Delta Lake",
      "Apache Iceberg",
      "Hudi",
      "Time travel",
      "Schema evolution"
    ]
  },
  {
    "num": "04",
    "title": "Streaming & Real-Time Data",
    "phase": "data",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-04.html",
    "doneWhen": [
      "You have a running Kafka → Structured Streaming pipeline consuming a keyed event stream.",
      "You built a windowed aggregation with a watermark, and can explain what the watermark bounds and why.",
      "You demonstrated late-data handling — one late event folded in, one dropped past the bound.",
      "You can state your pipeline's delivery semantics precisely, and where at-least-once vs exactly-once holds.",
      "You can whiteboard Lambda vs Kappa and defend which one you'd pick for a given system."
    ],
    "concepts": [
      "Event-driven architecture",
      "Kafka topics & partitions",
      "Offsets",
      "Consumer groups",
      "Log compaction",
      "Retention",
      "Delivery semantics",
      "Exactly-once",
      "Idempotent producer",
      "Stream processing",
      "Spark Structured Streaming",
      "Apache Flink",
      "Tumbling/sliding/session windows",
      "Watermarks",
      "Late data",
      "CDC",
      "Debezium",
      "Backpressure",
      "Lambda vs Kappa"
    ]
  },
  {
    "num": "05",
    "title": "Orchestration, DataOps & Data Quality",
    "phase": "data",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-05.html",
    "doneWhen": [
      "You've orchestrated a dbt + Spark pipeline end-to-end in Airflow or Dagster.",
      "You built a quality gate that stops the run when you inject bad data.",
      "You proved one task is idempotent — a re-run leaves the row count unchanged.",
      "You captured lineage and wired a freshness check with an explicit SLA.",
      "You wrote a one-page data contract for a source table."
    ],
    "concepts": [
      "Airflow (DAGs, operators, sensors)",
      "XComs",
      "Backfills",
      "Idempotent tasks",
      "Dynamic DAGs",
      "Dagster assets",
      "Prefect",
      "Great Expectations",
      "dbt tests",
      "Data contracts",
      "Schema enforcement",
      "Anomaly detection",
      "Data lineage",
      "OpenLineage",
      "Observability",
      "Freshness SLAs",
      "Circuit breakers",
      "CI/CD for data"
    ]
  },
  {
    "num": "06",
    "title": "Architecture, Governance & Capstone I",
    "phase": "data",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-06.html",
    "doneWhen": [
      "You have a public capstone repo running an end-to-end lakehouse — batch + stream in, bronze/silver/gold out.",
      "Your README carries an architecture diagram and 2–3 ADRs a staff engineer would respect.",
      "You've implemented one real governance control — column-level masking or role-based access — and can demo it.",
      "You can whiteboard a full data-platform design and defend the trade-off at every layer, NFRs first.",
      "You can compare mesh, fabric, and centralized on demand — and say which one an org actually needs, with a reason."
    ],
    "concepts": [
      "Data mesh",
      "Data fabric",
      "Centralized warehouse",
      "Domain ownership",
      "Self-serve platform",
      "Data catalog",
      "RBAC & ABAC",
      "PII & data classification",
      "GDPR/HIPAA",
      "Data masking",
      "FinOps for data",
      "Cost architecture",
      "Well-architected",
      "Reference architecture",
      "System design"
    ]
  },
  {
    "num": "07",
    "title": "Machine Learning Engineering Foundations",
    "phase": "ai",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-07.html",
    "doneWhen": [
      "You've trained and properly evaluated a scikit-learn model on a real tabular dataset.",
      "You can read a confusion matrix cold and pick precision vs recall for a given use case.",
      "You deliberately introduced a feature-leakage bug, caught it, and can explain how it snuck in.",
      "You have an MLflow-tracked experiment you can reproduce and compare.",
      "You have a working inference API that returns a live prediction from a JSON request."
    ],
    "concepts": [
      "Supervised vs unsupervised",
      "Classification vs regression",
      "Features & labels",
      "Feature engineering",
      "Train/validation/test split",
      "Overfitting",
      "Bias-variance tradeoff",
      "Regularization",
      "Cross-validation",
      "Precision/Recall/F1",
      "ROC-AUC",
      "Confusion matrix",
      "Feature store",
      "Batch vs online inference",
      "Model drift",
      "MLOps",
      "Experiment tracking"
    ]
  },
  {
    "num": "08",
    "title": "Neural Nets, Embeddings & How LLMs Work",
    "phase": "ai",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-08.html",
    "doneWhen": [
      "You built a working semantic search over your own text using embeddings and cosine similarity.",
      "You produced a 2D plot where semantically related items visibly cluster.",
      "You can explain self-attention and Query/Key/Value in plain words, no equations.",
      "You can explain the difference between pre-training, fine-tuning, and RLHF.",
      "You can define temperature and the context window precisely, on demand."
    ],
    "concepts": [
      "Neurons & layers",
      "Weights & activations",
      "Backpropagation",
      "Gradient descent",
      "Embeddings",
      "Cosine similarity",
      "Vector space",
      "Tokenization",
      "Self-attention",
      "Query/Key/Value",
      "Multi-head attention",
      "Positional encoding",
      "Transformer architecture",
      "Context window",
      "Pre-training",
      "Fine-tuning",
      "Instruction tuning",
      "RLHF",
      "Temperature",
      "Logits"
    ]
  },
  {
    "num": "09",
    "title": "LLM Application Engineering & RAG",
    "phase": "ai",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-09.html",
    "doneWhen": [
      "You have a working RAG app over your own docs that returns answers with citations to the source chunks.",
      "It refuses gracefully — says \"not in context\" — when the answer isn't in the retrieved material.",
      "You compared two chunking strategies and can say which retrieved better and why.",
      "You can diagram the RAG pipeline end to end and name the failure mode at each stage.",
      "You wrote an evaluation set for your app and can measure whether a change helps."
    ],
    "concepts": [
      "Claude API",
      "System prompts",
      "Few-shot prompting",
      "Chain-of-thought",
      "Structured output / JSON",
      "Prompt templates",
      "Prompt caching",
      "Token budgeting",
      "RAG",
      "Chunking strategies",
      "Embeddings",
      "Vector databases",
      "pgvector/Chroma/Pinecone",
      "Top-k retrieval",
      "Re-ranking",
      "Context assembly",
      "Grounding & citations",
      "Hallucination"
    ]
  },
  {
    "num": "10",
    "title": "Agents, Tool Use & the Model Context Protocol",
    "phase": "ai",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-10.html",
    "doneWhen": [
      "You have a working tool-using agent with a query tool and a real reason→act→observe loop.",
      "Your guardrails limit tool actions (read-only, row caps) and cap the loop count.",
      "A human-in-the-loop gate blocks any write until you approve it.",
      "You can diagram the ReAct loop from memory and explain what MCP adds over raw function calling.",
      "You logged and reviewed real tool-call traces from 5 analytical questions."
    ],
    "concepts": [
      "Agents",
      "Tool / function calling",
      "Structured tool schemas",
      "ReAct loop",
      "Planning & reasoning",
      "Multi-step tasks",
      "Model Context Protocol (MCP)",
      "MCP servers & clients",
      "Multi-agent orchestration",
      "Memory",
      "Guardrails",
      "Human-in-the-loop",
      "Text-to-SQL",
      "Orchestration frameworks"
    ]
  },
  {
    "num": "11",
    "title": "Production AI Systems & LLMOps",
    "phase": "ai",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-11.html",
    "doneWhen": [
      "You have a public Capstone II repo that fuses a data pipeline with an LLM system, both running end to end.",
      "You built an eval suite — golden set plus an LLM-as-judge rubric — that runs as a regression test on every change.",
      "You have tracing in place with tokens, latency, and cost logged to a dashboard.",
      "Your system redacts PII and returns grounded, cited answers with a refusal path.",
      "You wrote a fine-tune-vs-RAG rationale and can defend the choice out loud."
    ],
    "concepts": [
      "Evaluation",
      "LLM-as-judge",
      "Golden datasets",
      "Regression testing",
      "Tracing & observability",
      "Token/cost monitoring",
      "Latency optimization",
      "Prompt caching",
      "Semantic caching",
      "Fine-tuning vs RAG vs prompting",
      "LoRA",
      "Prompt/version management",
      "Guardrails",
      "Responsible AI",
      "PII handling",
      "Hallucination mitigation",
      "LLMOps"
    ]
  },
  {
    "num": "12",
    "title": "System Design, Portfolio & Job Launch",
    "phase": "ai",
    "url": "https://abrahamswamidass.github.io/posts/learning/roadmap/month-12.html",
    "doneWhen": [
      "Both capstone repos are polished and pinned — READMEs, architecture diagrams, and ADRs in place.",
      "Your resume and LinkedIn are rebuilt around the data+AI narrative and critiqued against a real job description.",
      "You've written 6–8 STAR stories, each ending in a quantified result.",
      "You survived three mock interviews — data design, AI design, behavioral — with scores that rose on each rerun.",
      "Applications are sent, and a short write-up of your 12-month journey is published."
    ],
    "concepts": [
      "Data system design",
      "AI/LLM system design",
      "Portfolio polish",
      "Resume repositioning",
      "LinkedIn optimization",
      "STAR stories",
      "Behavioral interviews",
      "Technical screens",
      "Mock interviews",
      "Salary negotiation",
      "Continuous learning",
      "Staying current"
    ]
  }
];
