import multiprocessing

bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1
loglevel = 'debug'
errorlog = '/Users/mac/Desktop/reizen/arpross/gunicorn_error.log'
accesslog = '/Users/mac/Desktop/reizen/arpross/gunicorn_access.log'
