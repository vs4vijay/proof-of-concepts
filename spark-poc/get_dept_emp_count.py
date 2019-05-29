#!/usr/bin/env python3

from pyspark.sql import SparkSession
from pyspark.sql.functions import *

spark = SparkSession.builder.appName("viz-spark").getOrCreate()

EMP_SOURCE = "Emp.csv"

def get_dept_emp_count():
	emp_data_frame = spark.read.format("csv").option("header", "true").load(EMP_SOURCE)

	grouped_by_dept = emp_data_frame.groupBy('deptno')

	grouped_by_dept = emp_data_frame.groupBy('deptno').agg(collect_list(emp_data_frame['empno']))

	print('All Emp No. for Each Dept No.: ')
	grouped_by_dept.show()


	grouped_by_dept = emp_data_frame.groupBy('deptno').agg(count(emp_data_frame['empno']))

	print('Count of Emp. for Each Dept No.: ')
	grouped_by_dept.show()


if __name__ == '__main__':
	get_dept_emp_count()