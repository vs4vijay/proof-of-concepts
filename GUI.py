#!/usr/bin/env python3

import sys

from PyQt5.QtWidgets import *

class TGramBotUI(QWidget):

    def __init__(self):
        super().__init__()
        self.init_ui()

    def init_ui(self):
        layout = QVBoxLayout()
        layout.addWidget(QLabel('Hello World!'))
        layout.addWidget(QPushButton('Top'))
        layout.addWidget(QPushButton('Bottom'))
        self.setWindowTitle('Simple')
        self.setGeometry(200, 200, 500, 300)
        # self.setWindowIcon(QIcon('logo.png'))
        self.setLayout(layout)
        self.show()

if __name__ == '__main__':
    app = QApplication(sys.argv)

    ex = TGramBotUI()
    sys.exit(app.exec_())