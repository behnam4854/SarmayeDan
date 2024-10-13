
# this is helper function to visulize the data using pandas and matplotlib

import pandas as pd
from .models import Transaction

import matplotlib.pyplot as plt
import io
from django.http import HttpResponse

def analyze_data():
    """to give us a simple summery about our data"""
    data = Transaction.objects.all().values('amount', 'date')
    df = pd.DataFrame(list(data))
    summery = df.describe()
    return summery

def plot_data():
    """plot the data that we get from analyzing our data"""
    plt.figure(figsize=(10, 6))
    plt.plot([1, 2, 3, 4], [10, 20, 25, 30])
    plt.title('Budget Plot')

    # Save the plot to a BytesIO object
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    plt.close()
    buf.seek(0)

    # Return as an HTTP response
    return HttpResponse(buf, content_type='image/png')

