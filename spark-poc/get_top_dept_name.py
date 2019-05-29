#!/usr/bin/env python3

from pyspark.sql import SparkSession
from pyspark.sql.functions import *

spark = SparkSession.builder.appName("viz-spark").getOrCreate()

EMP_SOURCE = "Emp.csv"
DEPT_SOURCE = "Dept.csv"

def get_top_dept_name():
	emp_data_frame = spark.read.format("csv").option("header", "true").load(EMP_SOURCE)
	dept_data_frame = spark.read.format("csv").option("header", "true").load(DEPT_SOURCE)

	print('All Emp. Content: ')
	emp_data_frame.show()

	print('All Dept. Content: ')
	dept_data_frame.show()


	joined_data_frame = emp_data_frame.join(dept_data_frame, dept_data_frame.deptno == emp_data_frame.deptno)

	grouped_data_frame = joined_data_frame.groupBy(dept_data_frame['dname'])

	final_data_frame = grouped_data_frame.agg(count(emp_data_frame['empno']))

	print('Top 2 Departments with employees: ')
	final_data_frame.show(2)


if __name__ == '__main__':
	get_top_dept_name()