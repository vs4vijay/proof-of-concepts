
print("Q1. Give top 5 committees names by dollar amount that have contributed to “LEWIS, JASON MARK MR.”")

committe_df = spark.table("cmte_mst_uni_js")
candidates_df = spark.table("cand_msi_uni_js")
contributions_df = spark.table("contrib_to_cmte_fr_cmte_mn_js")

cmte_to_filter = 'LEWIS, JASON MARK MR.'
committe_df.select('CMTE_NM').filter(committe_df.CMTE_NM == cmte_to_filter).show()

committe_df.join(contributions_df, committe_df.CMTE_ID == contributions_df.CMTE_ID).groupBy(committe_df.CMTE_NM).agg(sum(contributions_df.TRANSACTION_AMT).alias('total_contributions')).orderBy(desc('total_contributions')).show(5)

########